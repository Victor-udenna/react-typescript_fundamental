import { type } from 'os';
import React from 'react'

type nametype = {
    name: {
        first: string
        last: string
    }
}

export const Person = (props: nametype) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
  
}


export default Person;
