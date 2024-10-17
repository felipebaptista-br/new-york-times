import React, { HTMLAttributes } from "react"

// => Interface com as propriedades, extensão do título padrão HTML
interface LogoProps extends HTMLAttributes<HTMLHeadingElement> { size: number, color?: string }


export default function Logo({ size, color, ...props }: LogoProps) {
  return (
    // => Componente principal e dinâmico para novas alterações
    <h1
      className={`${props.className} italic font-bold capitalize`}
      style={{
        fontSize: size,
        color: color
      }}
      {...props}
    >
      new york times
    </h1>
  )
}