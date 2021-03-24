import cv_example from "../cv-langs.json"
import { classBeming } from "react-classnaming"
import type { ClassNamesProperty } from "react-classnaming"
import type { CssIdentifiersMap } from "../styles2/index.scss"
import { forIn } from "../utils/assoc"
import { ArticleContent } from "./ArticleContent"
import { chapter, dataProps } from "../utils/props"
import { Link } from "./Link"

export default function Page({
  title,
  description,
  links,
  items,
  properties
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
            : <Link key={type} {...{
              type,
              value,
              ...bem({
                //@ts-expect-error
                link: type === "phex" ? "phone" : type
              })}
            }/>
          )
        }</div>)
      }</aside>

      <hr {...bem({cv__delimiter: true})}/>

      { forIn(items, (section, {title, ...article}) =>
        <article key={section} {...bem({[`cv__${section}`]: true, article: true})}>
          <a {...bem({cv__chapter: true})} {...chapter(section)}>{title}</a>
          <ArticleContent {...article}/>
        </article>
      )}

      { forIn(properties, (section, {title, items}) =>
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
