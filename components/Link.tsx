import { ClassNamed } from "react-classnaming"
import { dataProps } from "../utils/props"
import { LinkTypes } from "../types"

type LinkProps = ClassNamed & {
  type: string
  value: string
}

export {
  Link
}

function Link({className, type, value}: LinkProps) {
  const {children, ...props} = linkHelper(type, value)

  return <a {...{className, ...props}}>{children}</a>
}

function linkHelper(type: string, value: string) {
  switch (type as LinkTypes) {
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