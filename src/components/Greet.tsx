import React from 'react'

type GreetProp = {
  name: string;
  messageCount: number;
  isLoggedin : boolean;
}

 export const Greet = (props: GreetProp) => {
  return (
    <div>{
      props.isLoggedin ? ` Welcome {props.name}! You have {props.messageCount} unread messages` : `welcome user`
      }</div>
  )
}

