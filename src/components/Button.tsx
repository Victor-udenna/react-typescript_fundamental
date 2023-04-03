import React from 'react'

type ButtonProps = {
    handlClick: (event: React.MouseEvent<HTMLButtonElement>, id: number, text: string) => void
}

let k:number = Math.random();

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={ event => props.handlClick(event, k, "Gota")}>Button</button>
  )
}
