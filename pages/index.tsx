import cv from "../cv--en.json"
import {classBeming } from "react-classnaming"
import type {  ClassNamesProperty } from "react-classnaming"
import type { CssIdentifiersMap } from "../styles2/index.scss"
import { arrayize, forIn } from "../utils/assoc"

export default function Page() {
  const bem = classBeming<ClassNamesProperty<CssIdentifiersMap>>()
  , {
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
  } = cv

  return <>
    <header {...bem({header: true})}>
      <span {...bem({header__title: true})}>{title}</span>
      <span {...bem({header__description: true})}>{description}</span>
    </header>
    <main {...bem({cv: true})}>
      <aside {...bem({cv__links: true})}>{
        forIn(links, (links_group, links) => <div key={links_group} {...bem({links_group})}>{
          forIn(links, (type, value) =>
            type === "location"
            ? <span key={type} {...bem({link: type})}>{value}</span>
            : <a key={type}
              {...bem({link: type === "phex" ? "phone" : type})}
              {...href(type, value)}
            />)
        }</div>)
      }</aside>

      <hr {...bem({cv__delimiter: true})}/>

      { forIn({languages, objectives, competences}, (section, {title, description, items, stack, subjects}) =>
        <article key={section} {...bem({[`cv__${section}`]: true, article: true})}>
          <a {...bem({cv__chapter: true})} {...chapter(section)}>{title}</a>

          <div {...bem({article__description: true})}>{description}</div>

          { forIn({stack, subjects, goals: items}, (key, value) => value &&
            <ul key={key} {...bem({[`article__${key}`]: true})}>{
              forIn(value, (k, v) => <li key={k}>{v}</li>)
            }</ul>
          )}
        </article>
      )}

      { forIn({experience, education, projects}, (section, {title, items}) =>
        <section {...bem({[`cv__${section}`]: true, article: true})}>
          <a {...bem({cv__chapter: true})} {...chapter(section)}>{title}</a>

          { forIn(items, (key, {title, min, max, subjects, stack, items, location, href, description}) =>
            <article key={key} {...bem({article: true})}>
              <a
                {...chapter(key)}
                {...bem({article__title: [href ? "external" : "anchor", min === undefined ? false : "range"]})}
                {...dataProps({min, max})
            }>{
              title
            }</a>

              <div {...bem({article__description: true})}>
                { description }

                {
                  location && arrayize(location)
                  .map(({title, description, city}, i) => <div key={i} {...bem({location: true})}>
                    {title && <span {...bem({location__title: true})}>{title}</span>  }
                    {description && <span {...bem({location__description: true})}>{description}</span> }
                    {city && <span {...bem({location__city: true})}>{city}</span> }
                  </div>)
                }
              </div>

              { forIn({stack, subjects, goals: items}, (key, value) => value &&
                <ul key={key} {...bem({[`article__${key}`]: true})}>{
                  forIn(value, (k, v) => <li key={k}>{v}</li>)
                }</ul>
              ) }

            </article>
          )}
        </section>
      )}
    </main>
  </>
}

function href(type: string, value: string) {
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

function dataProps<T extends Record<string, string|number>>(source: T) {
  const $return = {}

  for (const key in source)
    $return[`data-${key}`] = source[key]

  return $return
}