import React from 'react'

type Part<T> = {[K in keyof T]: T[K] | undefined}
type tProps = Part<{
  "name": string
  "email": string
  "phone": string
  "fileName": string
}>

export default function CvSlots({
  name = "",
  email = "",
  phone = "",
  fileName = ""
}: tProps) {
  const homepage = "https://github.com/askirmas"
  , packageName = "@kirmas/cv"
  , linkedIn = "https://www.linkedin.com/in/kirmas/"

  return <html lang="en">
    <head>
      {
        //@ts-ignore
        <meta charset="utf-8"/>
      }
      <title>{`${name} - Senior Software Engineer`}</title>
      <link href="./style.css" rel="stylesheet"/>
      <link href={`./${fileName}.css`} rel="stylesheet"/>
    </head>
    <body>
      <header className="Main__header">
        <div className="Main__title"></div>
        <div className="Main__description"><a className="Term--Engineer" href="https://medium.com/shakuro/programmer-vs-developer-vs-engineer-91ef374e5033" title=""></a></div>
        <div className="Main__links">
          <div className="links_group">
            <a className="links links--email" href={`mailto:${email}`}>{email}</a>
            <a className="links links--phone" href={`tel:${phone}`}>{phone}</a>
            <a className="links links--residence" href=""></a>  
          </div>
          <div className="links_group">
            <a className="links links--github" href={homepage}></a>
            <a className="links links--linkedin" href={linkedIn}></a>  
          </div>
          <div className="links_group">
            <a className="links links--html" href="./index.html">HTML</a>
            <a className="links links--pdf" href={`./${fileName}.pdf`}>PDF</a>
            <a className="links links--npm" href={`https://www.npmjs.com/package/${packageName}`}><code>npm install @kirmas/cv</code></a>  
          </div>
        </div>
      </header>
      <main className="Main">
        <div className="Main__Property Objectives"></div>
        <div className="Main__Property Core_Skills">{
            g(50).map((_, i) =>
              <div {...{key: `t${i}`, className: `Core_Skills__Term Core_Skills__Term-${i}`}}/>
            )
        }</div>
        <div className="Main__Property Human_Languages">
          <div className="Human_Languages__Property Human_Languages--English"></div>
          <div className="Human_Languages__Property Human_Languages--Hebrew"></div>
          <div className="Human_Languages__Property Human_Languages--Ukrainian"></div>
          <div className="Human_Languages__Property Human_Languages--Russian"></div>
          <div className="Human_Languages__Property Human_Languages--JS"></div>
        </div>
        <div className="Main__Property ExpRecords Experience">
        <div className="ExpRecords__Property Experience--y2020">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Experience__Term--y2020-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Experience__Goal--y2020-${i}`}}/>
            )
          }</div>
          <div className="ExpRecords__Property Experience--y2019">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Experience__Term--y2019-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Experience__Goal--y2019-${i}`}}/>
            )
          }</div>

          <div className="ExpRecords__Property Experience--y2017">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Experience__Term--y2017-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Experience__Goal--y2017-${i}`}}/>
            )
          }</div>
          <div className="ExpRecords__Property Experience--y2015">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Experience__Term--y2015-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Experience__Goal--y2015-${i}`}}/>
            )
          }</div>
          <div className="ExpRecords__Property Experience--y2014">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Experience__Term--y2014-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Experience__Goal--y2014-${i}`}}/>
            )
          }</div>
        </div>
        <div className="Main__Property ExpRecords Education">
          <div className="ExpRecords__Property Education--y2014">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Education__Term--y2014-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Education__Goal--y2014-${i}`}}/>
            )
          }</div>
          <div className="ExpRecords__Property Education--y2012">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Education__Term--y2012-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Education__Goal--y2012-${i}`}}/>
            )
          }</div>
          <div className="ExpRecords__Property Education--y2006">{
            g(20).map((_, i) =>
              <div {...{key: `t${i}`, className: `Term Education__Term--y2006-${i}`}}/>
            )
          }{
            g(10).map((_, i) =>
              <div {...{key: `g${i}`, className: `Goal Education__Goal--y2006-${i}`}}/>
            )
          }</div>
        </div>
      </main>
    </body>
  </html>
}

function g(count: number) {
  return new Array(count).fill(null)
}