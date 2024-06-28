import React from 'react'

export interface GoodsItemProps {
  imageSrc: string
  subtitle: string
  title: string
  amount: number
}

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount }) => {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <p>{subtitle}</p>
      <h3>{title}</h3>
      <p>
        {amount}
        {'원'}
      </p>
    </div>
  )
}

export default GoodsItem
