import cv_example from "../cv-langs.json"
import { classBeming } from "react-classnaming"
import type { ClassNamesProperty } from "react-classnaming"
import type { CssIdentifiersMap } from "../styles2/index.scss"
import { forIn } from "../utils/assoc"
import { ValueOf } from "../utils/ts-swiss.types"

const defaultLanguage = "en" as const
, {definitions} = cv_example[defaultLanguage]
, terms = {...definitions.stack, ...definitions.subjects}

export default function Page({
  title,
  description,
  links,
  "properties": {
    competences,
    objectives,
    languages,
    experience,
    education,
    projects
  }
}: typeof cv_example["en"]) {
  const bem = classBeming<ClassNamesProperty<CssIdentifiersMap>>()

  return <>
    <header {...bem({header: true})}>
      <span {...bem({
        //@ts-expect-error
        header__title: true
      })}>{title}</span>
      <span {...bem({header__description: true})}>{description}</span>
    </header>

    <main {...bem({cv: true})}>
      <aside {...bem({cv__links: true})}>{
        forIn(links, (links_group, links) => <div key={links_group} {...bem({links_group})}>{
          forIn(links, (type, value) =>
            type === "location"
            ? <span key={type} {...bem({link: type})}>{value}</span>
            : <a key={type}
              {...bem({
                //@ts-expect-error
                link: type === "phex" ? "phone" : type
              })}
              {...hrefer(type, value)}
            />)
        }</div>)
      }</aside>

      <hr {...bem({cv__delimiter: true})}/>

      { forIn({languages, objectives, competences}, (section, {title, ...article}) =>
        <article key={section} {...bem({[`cv__${section}`]: true, article: true})}>
          <a {...bem({cv__chapter: true})} {...chapter(section)}>{title}</a>
          <ArticleContent {...article}/>
        </article>
      )}

      { forIn({experience, education, projects}, (section, {title, items}) =>
        <section key={section} {...bem({[`cv__${section}`]: true, article: true})}>
          <a {...bem({cv__chapter: true})} {...chapter(section)}>{title}</a>

          { forIn(items, (key, {min, max, title, href, ...article}) =>
            <article key={key} {...bem({article: true})}>
              <a
                {...bem({article__title: [href ? "external" : "anchor", min === undefined ? false : "range"]})}
                {...href ? {href} : chapter(key)}
                {...dataProps({min, max})
              }>{title}</a>
              
              <ArticleContent {...article}/>
            </article>
          )}
        </section>
      )}
    </main>
  </>
}

Page.getInitialProps = ({query}) => query

function hrefer(type: string, value: string) {
  switch (type) {
    case "phex": return {
      href: `tel:${parseInt(value, 16)}`,
      ...dataProps({content: `+${parseInt(value, 16)}`})
    }
    case "email": return {
      href: `mailto:${value}`,
      children: value
    }
    case "skype": return {
      href: `skype:${value}?chat`,
      children: `skype: ${value}`
    }
    case "linkedin": return {
      href: `https://linkedin.com/in/${value}/`,
      children: `linkedin.com/in/${value}`
    }
    case "github": return {
      href: `https://github.com/${value}`,
      children: `github.com/${value}`
    }
    case "npm": return {
      href: `https://www.npmjs.com/package/${value}`,
      children: <img src={`https://badge.fury.io/js/${encodeURIComponent(value)}.svg`} alt="npm"/>
    }
    case "html":
    case "pdf": {
      return {
        children: type.toUpperCase()
      }
    }

    default: return {
      href: value,
      children: `${type}: ${value}`
    }
  }
}

function chapter(id: string) {
  return { id, href: `#${id}` }
}

function stacker(id: string) {
  return dataProps({hover: id})
}

function dataProps<T extends Record<string, string|number>>(source: T) {
  const $return = {}

  for (const key in source)
    $return[`data-${key}`] = source[key]

  return $return
}

type Example = typeof cv_example[typeof defaultLanguage]["properties"]

type Props = Partial<Pick<ValueOf<
  ValueOf<Pick<Example, "experience"|"education"|"projects">>["items"]
  & Pick<Example, "competences"|"objectives"|"languages">
>, "stack"|"subjects"|"items"|"locations"|"description">>

function ArticleContent({
  stack,
  subjects,
  items,
  locations,
  description,
}: Props) {
  const bem = classBeming<ClassNamesProperty<CssIdentifiersMap>>()

  return <>
    <div {...bem({article__description: true})}>
      { description }

      {
        //@ts-expect-error
        locations?.map(({title, description, city}, i) => <div key={i} {...bem({location: true})}>
          {title && <span {...bem({location__title: true})}>{title}</span>  }
          {description && <span {...bem({location__description: true})}>{description}</span> }
          {city && <span {...bem({location__city: true})}>{city}</span> }
        </div>)
      }
    </div>

    { forIn({stack, subjects, goals: items}, (key, value) => value &&
      <ul key={key} {...bem({[`article__${key}`]: true})}>{
        forIn(value, (k, v) => {
          //TODO De-hardcode - update data
          const term = terms[v] ?? (key in definitions ? {group: v} : undefined)
          , {favor, group}: Partial<ValueOf<typeof terms>> = term ?? {}

          return <li key={k}
            {...term && bem({term: favor === -1 ? "deprecated" : true})}
            {...stacker(group)}
          >{v}</li>
        })
      }</ul>
    ) }
  </>
}
