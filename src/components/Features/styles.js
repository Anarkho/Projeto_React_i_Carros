import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 120px;
  .features {
    width: 100%;
    height: 52.4rem;

    display: flex;
    justify-content: space-between;

    margin: 4.8rem 0;
  }

  & h2 {
    position: absolute;

    width: 390px;
    height: 36px;
    /* Font*/
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: #fefcff !important;
    display: flex;
    align-items: center;
  }

  .features > a {
    width: 25.6rem;
    height: 2.4rem;
    right: 0;
    display: flex;
    align-items: center;
    opacity: 0.7;
  }

  .features-left {
    width: 23.8rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      margin-left: 273px;
      margin-bottom: 10px;
    }
    p{
        margin-bottom: 20px;
    }
  }

  & .features-column-left {
    height: 36.8rem;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;

    p

  }

  /* auto */
  .auto-road {
    height: 100%;
    margin-top: -60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .features-right {
    width: 60.8rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .features-column-right {
    height: 36.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -480px;
    margin-left: 630px;

    a {
      text-decoration: none;
      color: #d5d2dc;
    }
  }

  .features-right {
    width: 416px;
    height: 73px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    margin: 3.2rem 0;
  }
`
