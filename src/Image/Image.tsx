import React from 'react'
import styled from 'styled-components'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: '16/9' | 'square'
}

const StyledImageWrapper = styled.div<{ ratio?: string }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${({ ratio }) => ratio === '16/9' && 'padding-top: 56.25%;' /* 16:9 비율 */}
  ${({ ratio }) => ratio === 'square' && 'padding-top: 100%;' /* 정사각형 비율 */}
`

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image: React.FC<ImageProps> = ({ ratio, ...props }) => {
  return (
    <StyledImageWrapper ratio={ratio}>
      <StyledImage {...props} />
    </StyledImageWrapper>
  )
}

export default Image
