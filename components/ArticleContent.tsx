import cv_example from "../cv-langs.json"
import { classBeming } from "react-classnaming"
import type { ClassNamesProperty } from "react-classnaming"
import type { CssIdentifiersMap } from "../styles2/index.scss"
import { forIn } from "../utils/assoc"
import { ValueOf } from "../utils/ts-swiss.types"
import { stacker } from "../utils/props"

const defaultLanguage = "en" as const
, {definitions} = cv_example[defaultLanguage]
, terms = {...definitions.stack, ...definitions.subjects}

type Example = typeof cv_example[typeof defaultLanguage]

type Props = Partial<Pick<ValueOf<
  ValueOf<Example["properties"]>["items"]
  & Example["items"]
>, "stack"|"subjects"|"items"|"locations"|"description">>

export {
  ArticleContent
}

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
