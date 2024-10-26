import { reactNode } from './src/interface'
import React, { FC } from 'react'



const GlobalContext:FC<reactNode> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default GlobalContext