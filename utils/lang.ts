import type { LangRec, Langs } from "../types"

const {isArray: $isArray} = Array

export type Langer<L extends string> = <T>(data: Record<L, T> | T) => T

export  {
  langer,
  langRec
}

function langer<L extends string>(lang: L): Langer<L> {
  return data => {
    if (typeof data === "string")
      return data

    //@ts-expect-error
    return data[lang]
  }
}

function langRec<L extends Langs, T>(lang: L, source: T) :LangRec<T> {
  const $return: Partial<LangRec<T>> = {}

  if ($isArray(source)) 
    //@ts-expect-error
    return source.map(el => typeof el !== "object" ? el : langRec(lang, el) )

  if ("en" in source)
    //@ts-expect-error
    return source[lang] ?? source["en"]
  else
    for (const key in source) {
      const value = source[key]
      //@ts-expect-error
      $return[key] = typeof value !== "object"
      ? value
      : langRec(lang, value)  
  }


  return $return as LangRec<T>
}