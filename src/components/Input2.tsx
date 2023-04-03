import React from 'react'

import { InputProp } from "./person.type";


export const Input2 = ({Onchange}: InputProp) => {
  return (
   <input onChange={Onchange}/>
  )
}
