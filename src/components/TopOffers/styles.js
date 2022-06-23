import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 20px;
  width: inherit;

  .top-offers-top {
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.2rem;

    & p {
      color: #d5d2dc;
      margin-left: 27px;
      margin-top: 2px;
    }
  }

  /* Ofertas */
  .top-offers-top h2 {
    width: 10.6rem;
    height: 3.6px;

    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: #fefcff;
    display: flex;
    align-items: center;
  }

  /* Ofertas */

  .top-offers-top .view-all {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 13.3rem;
    height: 2.4rem;

    opacity: 0.7;
  }

  /* top-offers-down */
  .top-offers-down {
    display: flex;
    justify-content: space-between;
  }

  /* car-card/vertical */
  & .card-vertical-left {
    width: 550px;
    height: 27.5rem;

    border-radius: 1.2rem;

    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0px 2px 8px -4px rgba(31, 27, 45, 0.12),
      0px 4px 16px rgba(31, 27, 45, 0.12);

    & img {
      width: 550px;
      height: 13rem;
      border-radius: 1.2rem 1.2rem 0rem 0rem;
    }
  }

  .top-offers .card-vertical-left img {
    border-radius: 1.2rem 1.2rem 0 0;
  }

  /* cards-left*/
  .top-offers .cards-right {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.2rem;
  }

  /* card-horizontal-up */
  .card-horizontal-up {
    width: 645px;
    height: 13rem;
    margin-bottom: 1.5rem;
    margin-left: 4px;
    border-radius: 1.2rem;
    background: rgba(255, 255, 255, 0.04);

    box-shadow: 0px 4px 12px -6px rgba(31, 27, 45, 0.2),
      0px 8px 16px rgba(31, 27, 45, 0.16);
  }

  /* card-horizontal-down */
  .card-horizontal-down {
    width: 645px;
    height: 13rem;
    border-radius: 1.2rem;
    background: rgba(255, 255, 255, 0.04);
    margin-left: 4px;
    box-shadow: 0px 4px 12px -6px rgba(31, 27, 45, 0.2),
      0px 8px 16px rgba(31, 27, 45, 0.16);
  }

  .card-horizontal-hover:hover {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .info {
    display: flex;
    flex-direction: column;

    .pin-offers {
      width: 20px !important;
      margin-top: -91px;
      margin-left: 5px;
    }
    .region {
      margin-top: -112px;
      margin-left: 28px;
      color: #d5d2dc;
      font-weight: 350;
    }
  }
  .especification {
    display: flex;
    justify-content: space-around;

    .dashboard {
      width: 35px !important;
      margin-top: -80px;
      margin-left: 5px;
    }
  }
  .dash {
    margin-top: 10px;
    display: flex;
    width: 140px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1f1b2c;
    height: 70px;
    border-radius: 1.2rem;

    & img {
      margin-right: 5px;
    }
    & p {
      font-weight: 350;
      margin-top: -90px;
    }
  }
  .ano-compare {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    & label,
    span {
      color: #fefcff;
      font-weight: 200;
      margin: 0px 10px;
    }
    & input {
      background-color: #555 !important;
    }
  }

  p {
    margin: 5px 10px;
    color: #d5d2dc;
  }
  .price {
    color: #fd5631;
  }

  hr {
    margin-top: 18px;
    margin-left: 10px;
    width: 96%;
    border-bottom: none;
    border-color: #d5d2dc;
  }
  .card-right {
    display: flex;

    & img {
      height: 13rem;
      border-radius: 1.2rem 0rem 0rem 1.2rem;
    }
    span {
      width: 45px;
      position: relative;
      top: 0;
      margin-top: 5px;
      margin-left: -200px;
      height: 15px;
      padding: 3px;
      border-radius: 5px;
      text-align: center;
      color: #fefcff;
      font-weight: 300;
      line-height: 1;
    }
    .img-coracao {
      width: 45px;
      position: relative;
      top: 0;
      margin-top: 5px;
      margin-left: -91px;
      height: 15px;
      padding: 3px;
      border-radius: 5px;
      text-align: center;
      color: #fefcff;
      font-weight: 300;
      line-height: 1;
    }
    .right-info {
      margin-left: 200px;

      .compare-info {
        display: flex;
        flex-direction: row;
        width: 230px;

        p {
          margin: -23px -40px;
          font-weight: 300;
        }
        span {
          margin-left: 14px;
          margin-top: -23px;
        }

        input[type='checkbox'] {
          margin-left: 275px;
          margin-top: -23px;
        }
      }
    }
  }
`
