import React from 'react'

type ContainerProp = {
    style: React.CSSProperties
}

export const Style = (props: ContainerProp) => {
  return (
    <div style={props.style}>
          Text content goes here
    </div>
  )
}
