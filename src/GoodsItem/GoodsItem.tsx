import React from 'react'
import styled from 'styled-components'

export interface GoodsItemProps {
  imageSrc: string
  subtitle: string
  title: string
  amount: number
}

const GoodsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
`

const GoodsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

const GoodsSubtitle = styled.p`
  font-size: 14px;
  color: #888;
`

const GoodsTitle = styled.h3`
  font-size: 18px;
  margin: 8px 0;
`

const GoodsAmount = styled.p`
  font-size: 16px;
  font-weight: bold;
`

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount }) => {
  return (
    <GoodsItemWrapper>
      <GoodsImage src={imageSrc} alt={title} />
      <GoodsSubtitle>{subtitle}</GoodsSubtitle>
      <GoodsTitle>{title}</GoodsTitle>
      <GoodsAmount>
        {amount}
        {'원'}
      </GoodsAmount>
    </GoodsItemWrapper>
  )
}

export default GoodsItem
