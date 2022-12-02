import Link from 'next/link'
import React from 'react'

type LinkComponent = {
    href: string,
    name: string | JSX.Element | JSX.Element[],
    className?: string,
    id?: string,
    style?: React.CSSProperties,
    icon?: JSX.Element | JSX.Element[]
}

const LinkComponent = (props: LinkComponent) => {
  return (
   <Link href={props.href} className={props.className ?? ''} id={props.id ?? ''} style={props.style ?? {}}>{props.icon ?? ''} {props.name}</Link>
  )
}

export default LinkComponent