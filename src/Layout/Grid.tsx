import React from 'react'

export type GridProps = {
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Grid
