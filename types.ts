export type CV = Described & {
  links: Record<"contacts"|"social"|"etc", {[k in LinkTypes]?: Langed}>
  properties: {
    languages: Titled & {
      items: Record<string, Langed>
    }
    objectives: Described
    competences: Titled & tExperienceItem
    projects: Titled & {
      items: Array<{
        $ref: string
        stack: string[]
      }>
    }
  } & Record<"experience"|"education", Titled & {
    items: Record<string, tExperienceItem>
  }>
}

export type tExperienceItem = Titled & Partial<{
  min: number
  max: number
  location: Location | Location[]
  stack: string[]
  items: Langed[]
}>

// type Collection<T> = Record<string, T> | Array<T>

export type Location = Described & {
  city: Langed
}

type Titled = {
  title: Langed
}
type Described = Titled & Partial<{
  description: Langed
}>

// export type LangedExt = Langed | {[L in Langs]?: {const: string; mask: string}}

type Langed = string | {[L in Langs]?: string}

export type LangRec<T> = T extends any[] ? LangRec<T[number]>[]
: T extends {[k in LinkTypes]?: string}
? string
: T extends AnyObject ? {[k in keyof T]: LangRec<T[k]>}
: T

type AnyObject = Record<string, any>

export type Langs = "en"|"uk"|"he"|"ru"
type LinkTypes = "email"|"phex"|"location"|"linkedin"|"github"|"skype"|"html"|"pdf"|"npm"