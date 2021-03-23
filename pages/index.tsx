// import cv from "../cv"
// import { langRec } from "../utils/lang"
import cv from "../cv--en.json"
import type { Recombine, UnionToIntersection } from "../utils/ts-swiss.types"
import {classBeming } from "react-classnaming"
import type { ClassNamed, ClassNamesProperty } from "react-classnaming"
import type {CssIdentifiersMap} from "../styles2/index.scss"
import { arrayize, forIn } from "../utils/assoc"

// const langed = langRec("en", cv as Recombine<typeof cv>)

export default function Page() {
  const bem = classBeming<ClassNamesProperty<CssIdentifiersMap>>()
  // , {
  //   title,
  //   description,
  //   links,
  //   properties: {
  //     objectives,

  //     competences,

  //     education,
  //     experience,
  //     projects,
  //     languages
  //   },
  // } = langed

  return <>
    <header {...bem({header: true})}>
      <span {...bem({header__title: true})}>{cv.title}</span>
      <span {...bem({header__description: true})}>{cv.description}</span>
    </header>
    <main {...bem({cv: true})}>
      <aside {...bem({cv__links: true})}>{
        forIn(cv.links, (links_group, links) => <div key={links_group} {...bem({links_group})}>{
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
      <article {...bem({cv__languages: true, article: true})}>
        <a {...chapter("languages")} {...bem({cv__chapter: true})}>{cv.properties.languages.title}</a>
        <ul {...bem({article__goals: true})}>{
          forIn(cv.properties.languages.items, (key, value) => <li key={key}>{value}</li>)
        }</ul>
      </article>

      <article {...bem({cv__objectives: true, article: true})}>
        <a {...chapter("objectives")} {...bem({cv__chapter: true})}>{cv.properties.objectives.title}</a>
        <div {...bem({article__description: true})}>{cv.properties.objectives.description}</div>
      </article>

      <article {...bem({cv__competences: true, article: true})}>
        <a {...chapter("competences")} {...bem({cv__chapter: true})}>{cv.properties.competences.title}</a>
        <ul {...bem({article__description: true})}>{
          forIn(cv.properties.competences.subjects, (key, value) => <li key={key}>{value}</li>)
        }</ul>
        <ul {...bem({article__stack: true})}>{
          forIn(cv.properties.competences.stack, (key, value) => <li key={key}>{value}</li>)
        }</ul>
      </article>

      <section {...bem({cv__projects: true, article: true})}>
        <a {...chapter("projects")} {...bem({cv__chapter: true})}>{cv.properties.projects.title}</a>
        {
          forIn(cv.properties.projects.items, (key, {title, stack, description, href}) => <article key={key} {...bem({article: true})}>
            <a {...{href, ...bem({article__title: true})}}>{title}</a>
            <ul {...bem({article__stack: true})}>{
              forIn(stack, (key, value) => <li key={key}>{value}</li>)
            }</ul>
            <div {...bem({article__description: true})}>{description}</div>
          </article>)
        }
      </section>

      <section {...bem({cv__experience: true, article: true})}>
        <a {...chapter("experience")} {...bem({cv__chapter: true})}>{cv.properties.experience.title}</a>
        {
          forIn(cv.properties.experience.items, (key, {min, max, title, location, items, stack}) =>
            <article key={key} {...bem({article: true})}>
              <a {...chapter(key)} {...bem({article__title: "range"})} {...dataProps({min, max})}>{title}</a>
              <div {...bem({article__description: true})}>{
                arrayize(location)
                .map(({title, description, city}, i) => <div key={i} {...bem({location: true})}>
                  {title && <span {...bem({location__title: true})}>{title}</span>  }
                  {description && <span {...bem({location__description: true})}>{description}</span> }
                  {city && <span {...bem({location__city: true})}>{city}</span> }
                </div>)
              }</div>
              <ul {...bem({article__stack: true})}>{
                forIn(stack, (key, value) => <li key={key}>{value}</li>)
              }</ul>
              <ul {...bem({article__goals: true})}>{
                forIn(items, (key, value) => <li key={key}>{value}</li>)
              }</ul>
            </article>
          )
        }
      </section>

      <section {...bem({cv__education: true, article: true})}>
        <a {...chapter("education")} {...bem({cv__chapter: true})}>{cv.properties.education.title}</a>
        {
          forIn(cv.properties.education.items, (key, {min, max, title, location, subjects, stack}) =>
            <article key={key} {...bem({article: true})}>
              <a {...chapter(key)} {...bem({article__title: "range"})} {...dataProps({min, max})}>{title}</a>
              <div {...bem({article__description: true})}>{
                arrayize(location)
                //@ts-expect-error
                .map(({title, description, city}, i) => <div key={i} {...bem({location: true})}>
                  {title && <span {...bem({location__title: true})}>{title}</span>  }
                  {description && <span {...bem({location__description: true})}>{description}</span> }
                  {city && <span {...bem({location__city: true})}>{city}</span> }
                </div>)
              }</div>
              <ul {...bem({article__stack: true})}>{
                forIn(stack, (key, value) => <li key={key}>{value}</li>)
              }</ul>
              <ul {...bem({article__subjects: true})}>{
                forIn(subjects, (key, value) => <li key={key}>{value}</li>)
              }</ul>
            </article>
          )
        }
      </section>
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