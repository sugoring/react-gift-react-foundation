import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface ContainerProps {
  // export 추가
  padding?: string
  maxWidth?: string
  children: ReactNode // children 속성을 추가합니다.
}

const StyledContainer = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: ${props => props.padding || '16px'};
  max-width: ${props => props.maxWidth || '1200px'};
  width: 100%;
`

const Container: React.FC<ContainerProps> = ({ padding, maxWidth, children }) => {
  return (
    <StyledContainer padding={padding} maxWidth={maxWidth}>
      {children}
    </StyledContainer>
  )
}

Container.defaultProps = {
  padding: '16px',
  maxWidth: '1200px',
}

export default Container
