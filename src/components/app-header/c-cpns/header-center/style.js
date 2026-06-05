import styled from 'styled-components'

export const CenterWrapper = styled.div`
.search-bar {
  width: 170px;
  height: 48px;
  border-radius: 48px;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ccc;
  ${props => props.theme.mixin.boxShadow};
}
`