var navigator
const langs = new Set(["en", "he", "uk", "ru"])

export default function Redir(props) {
  console.log(props)
  const lang = navigator?.languages.find(l => langs.has(l)) ?? "en"

  try {
    // location.replace(`${location.href}${lang}`)
  } catch(e) {}

  return null
}

export const getStaticProps = ({locales = null}) => ({props: {locales}})