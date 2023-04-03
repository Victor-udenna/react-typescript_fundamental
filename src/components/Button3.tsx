import React from 'react'
type clickbtn = {
    handleclick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button3 = (props: clickbtn) => {
  return (
   <button onClick={event=> props.handleclick(event)}>Button 3</button>
  )
}
