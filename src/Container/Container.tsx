import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  padding?: string
  maxWidth?: string
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

export default Container
