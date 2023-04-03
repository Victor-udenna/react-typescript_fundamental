import React from 'react'

type newProp = {
HandleClick: ()=> void
}

export const Button2 = (props: newProp) => {
  return (
    <button onClick={props.HandleClick}>Button2</button>
  )
} 