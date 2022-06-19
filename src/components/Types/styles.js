import styled from 'styled-components'

export const Container = styled.section`
  margin-top: -550px;
  .types {
    display: flex;
    flex-direction: column;
    max-width: 129.6rem;
  }

  a {
    text-decoration: none !important;
  }
  span {
    text-align: center;
  }
  /* types-top */
  .types-top {
    display: flex;
    margin: 0px -48px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.2rem;
  }

  /* Mais procurados */
  h2 {
    width: 13.2rem;
    height: 3.6rem;
    color: #fefcff;

    display: flex;
    align-items: center;

    /* Font */
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
  }

  /* view-all */
  .view-all {
    height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    opacity: 0.7;
  }

  /* Ver todos */
  & .types-top .view-all p {
    height: 1.8rem;
    /* Font*/
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    color: #d5d2dc;
  }

  .cards-line1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    & img {
      width: 200px;
    }
  }

  .card-line2 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    & img {
      width: 200px;
    }
  }

  .car-lines div a {
    height: 10rem;
    width: 20%;
    text-align: center;
    border-radius: 1.2rem;
    text-decoration: none;

    &:active {
      color: #fd5631;
    }
  }

  .car-lines div a:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`
