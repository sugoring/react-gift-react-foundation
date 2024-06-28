import React from 'react'
import styled, { css } from 'styled-components'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: '16/9' | 'square'
  radius?: number | 'circle'
}

const StyledImageWrapper = styled.div<{ ratio?: string }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${({ ratio }) => ratio === '16/9' && 'padding-top: 56.25%;' /* 16:9 비율 */}
  ${({ ratio }) => ratio === 'square' && 'padding-top: 100%;' /* 정사각형 비율 */}
`

const StyledImage = styled.img<{ radius?: number | string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ radius }) =>
    typeof radius === 'number' &&
    css`
      border-radius: ${radius}px;
    `}
  ${({ radius }) =>
    radius === 'circle' &&
    css`
      border-radius: 50%;
    `}
`

const Image: React.FC<ImageProps> = ({ ratio, radius, ...props }) => {
  return (
    <StyledImageWrapper ratio={ratio}>
      <StyledImage radius={radius} {...props} />
    </StyledImageWrapper>
  )
}

export default Image
