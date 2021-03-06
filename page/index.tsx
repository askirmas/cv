import React from 'react'

// type Part<T> = {[K in keyof T]: T[K] | undefined}
type tProps = Partial<{
  "name": string
  "description": string
  "email": string
  "phex": string | string[]
  "fileName": string
  "packageName": string
  "skype": string
  "linkedIn": string
  "github": string
  "repositoryUrl": string
}>

const {entries: $entries} = Object
, {isArray: $isArray} = Array
, coreCount = 50
, goalsCount = 10
, termsCount = 20
, slotKeys = {
  "Experience": [2020, 2019, 2017, 2015, 2014],
  "Education": [2014, 2012, 2006]
}
, langs = ["English","Hebrew","Ukrainian","Russian","JS"]

export default function CvSlots({
  name = "",
  description = "",
  email = "",
  phex = [],
  fileName = "",
  github = "",
  skype = "",
  packageName = "",
  linkedIn = "",
  repositoryUrl = ""
}: tProps) {
  const phones = ($isArray(phex) ? phex : [phex])
  .map(phex => parseInt(phex, 16)
    .toString()
    .replace(/^(.*)([\d]{2})([\d]{3})([\d]{4})$/, "+$1($2)$3-$4")
  )

  return <html lang="en">
    <head>
      {
        //@ts-ignore
        <meta charset="utf-8"/>
      }
      <title>{description}</title>
      <link href="./style.css" rel="stylesheet"/>
      <link href={`./${fileName}.css`} rel="stylesheet"/>
    </head>
    <body>
      <header className="Main__header">
        <div className="Main__title">{name}</div>
        <div className="Main__description">
          {
            description
            .replace(name, "")
            .replace(/(^[^\w]+|Engineer)/g, "")
          }
          <a className="Term--Engineer" href="https://medium.com/shakuro/programmer-vs-developer-vs-engineer-91ef374e5033" title="The engineer has a solid educational grounding and the ability to apply engineering concepts to create digital solutions"></a>
        </div>
        <div className="Main__links">
          <div className="links_group">
            <a className="links links--email" href={`mailto:${email}`}>{email}</a>
            <div className="links links--phone">{
              phones.map(phone => <a {...{
                "key": phone,
                "href": `tel:${phone.replace(/[^0-9+]+/g, "")}`,
              }}>{phone}</a>)              
            }</div>
            <a className="links links--residence" href=""></a>  
          </div>
          <div className="links_group">
            <a className="links links--skype" href={skype}></a>
            <a className="links links--github" href={github}>
              <img src={`${repoUrl2href(repositoryUrl)}/workflows/CI/badge.svg`}/>
            </a>
            <a className="links links--linkedin" href={linkedIn}></a>  
          </div>
          <div className="links_group">
            <a className="links links--html" href="./index.html">HTML</a>
            <a className="links links--pdf" href={`./${fileName}.pdf`}>PDF</a>
            <a className="links links--npm" href={`https://www.npmjs.com/package/${packageName}`}>
              <img src={`https://badge.fury.io/js/${encode(packageName)}.svg`} />
              <code>npm install {packageName}</code>
            </a>  
          </div>
        </div>
      </header>
      <main className="Main">
        <div className="Main__Property Objectives"></div>
        <div className="Main__Property Core_Skills">{
            g(coreCount, i => <div {...{
              "key": `t${i}`,
              "className": `Core_Skills__Term Core_Skills__Term-${i}`
            }}/>)
        }</div>
        <div className="Main__Property Human_Languages">{
          langs
          .map(lang => <div {...{
            "key": lang,
            "className": `Human_Languages__Property Human_Languages--${lang}`
          }}/>)
        }</div>
        {
          ($entries(slotKeys) as [keyof typeof slotKeys, typeof slotKeys[keyof typeof slotKeys]][])
          .map(([type, years]) =>
            <div {...{
              "key": type,
              "className": `Main__Property ExpRecords ${type}`
            }}>{
              years.map(year => <ExpRecord {...{
                "key": year,
                year,
                type
              }}/>)
            }</div>
          )
        }
      </main>
    </body>
  </html>
}

type tExpRecordProps = {
  "year": number
  "type": "Education"|"Experience"
}

function ExpRecord({year, type}: tExpRecordProps) {
  return <div className={`ExpRecords__Property ${type}--y${year}`}>{
    g(termsCount, i => <div {...{
      "key": `t${i}`,
      "className": `Term ${type}__Term--y${year}-${i}    `
    }}/>)
  }{
    g(goalsCount, i => <div {...{
      "key": `g${i}`,
      "className": `Goal ${type}__Goal--y${year}-${i}`
    }}/>)
  }</div>

}

function g<T>(count: number, itemFn: (i: number) => T) :T[] {
  const $return = new Array(count)
  for (let i = count; i--;)
    $return[i] = itemFn(i)
  return $return
}

function encode(source: string) {
  return source
  .replace(/@/g, "%40")
  .replace(/\//g, "%2F")
}

function repoUrl2href(source: string) {
  return source
  .replace(/(^git\+|\.git$)/g,'')
  .replace(/\/+$/, '')
}