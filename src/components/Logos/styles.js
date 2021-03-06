import styled from 'styled-components'

export const Container = styled.section`
  width: inherit;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 4rem;

  & a {
    height: 4.8rem;

    opacity: 0.4;
  }

  & a:hover {
    opacity: 1;
  }
`
