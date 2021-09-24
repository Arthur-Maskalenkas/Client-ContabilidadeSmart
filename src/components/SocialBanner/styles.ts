import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 25rem;
  height: 9.5rem;

  & > img {
    width: 100%;
    height: 100%;
    /* Essencial */
    object-fit: cover;
  }
`
