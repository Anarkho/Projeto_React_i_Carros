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
    height: 70vh;

    .card-left-vertical {
      background: rgba(255, 255, 255, 0.04);
      box-shadow: 0px 2px 8px -4px rgba(31, 27, 45, 0.12),
        0px 4px 16px rgba(31, 27, 45, 0.12);
      width: 45%;
      border-radius: 1.2rem;

      img {
        width: 100%;
        height: 47.5%;
        border-radius: 1.2rem 1.2rem 0rem 0rem;
      }
      .setas {
        width: 30px;
        height: 30px;

        &:hover {
          border-radius: 15px;
          background-color: #fd5631;
        }
        &:nth-child(1) {
          position: absolute;
          right: 0;
          margin-top: 7%;
          margin-right: 87%;
          float: right;
        }
        &:nth-child(2) {
          position: absolute;
          right: 0;
          margin-top: 7%;
          margin-right: 54%;
          transform: rotate(180deg);
          float: right;
        }
      }
      .setas {
        height: 30;

        &:hover {
          color: #fefcff;
        }
      }

      .card-left-down-infos {
        height: 51%;

        .ano-compare {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;

          p {
            color: #fefcff;
            font-weight: 300;
            margin-left: 10px;
          }

          .check {
            display: block;
            position: relative;
            padding-left: 24px;
            cursor: pointer;
            font-size: 14px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .check p {
            padding-top: 1px;
            margin-right: 10px;
            margin-left: -3px;
          }

          .check input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .checkmark {
            margin-top: 1px;
            position: absolute;
            top: 0;
            left: 0;
            height: 14px;
            width: 14px;
            background-color: transparent;
            border: 1px solid #d5d2dc;
            border-radius: 20%;
            transition: all 0.2s ease-in-out;
          }

          .check:hover input ~ .checkmark {
            background-color: #ccc;
          }

          .check input:checked ~ .checkmark {
            background-color: #fd5631;
          }

          .checkmark:after {
            content: '';
            position: absolute;
            display: none;
          }

          .check input:checked ~ .checkmark:after {
            display: block;
          }

          .check .checkmark:after {
            left: 5px;
            top: 1px;
            width: 2px;
            height: 7px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
        .especification {
          margin: 10px;
          padding: 10px 0px;

          hr {
            margin-top: 5px;
            border-bottom: none;
            border-color: #d5d2dc;
          }
          h3 {
            margin-bottom: 10px;
            color: #fefcff;
          }
          .price {
            margin-bottom: 10px;
            color: #fd5631;
          }
          .location {
            display: flex;
            align-items: center;
            img {
              width: 20px;
            }
            p {
              color: #d5d2dc;
              margin-left: 5px;
              font-weight: 300;
            }
          }
        }
        .info-car {
          margin-top: 15px;
          display: flex;
          align-items: center;
          justify-content: space-around;

          img {
            padding: 5px 0px;
            width: 35px;
            height: 35px;
          }
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0px 5px;
            width: 40%;
            background-color: #1f1b2c;
            border-radius: 1.2rem;

            p {
              margin-top: -5px;
              color: #fefcff;
              margin-bottom: 5px;
              font-weight: 300;
            }
          }
        }
      }
    }
    .card-right-vertical {
      display: flex;
      flex-direction: column;
      width: 53%;
      justify-content: space-between;

      .card-right-up {
        display: flex;
        height: 47.5%;
        background: rgba(255, 255, 255, 0.04);
        box-shadow: 0px 2px 8px -4px rgba(31, 27, 45, 0.12),
          0px 4px 16px rgba(31, 27, 45, 0.12);
        border-radius: 1.2rem;

        img {
          height: 100%;
          border-radius: 1.2rem 0rem 0rem 1.2rem;
        }
        .card-right-up-infos {
          height: 100%;
          width: 100%;

          .ano-compare {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;

            p {
              color: #fefcff;
              font-weight: 300;
              margin-left: 10px;
            }

            .check {
              display: block;
              position: relative;
              padding-left: 24px;
              cursor: pointer;
              font-size: 14px;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }

            .check p {
              padding-top: 1px;
              margin-right: 10px;
              margin-left: -3px;
            }

            .check input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
            }

            .checkmark {
              margin-top: 1px;
              position: absolute;
              top: 0;
              left: 0;
              height: 14px;
              width: 14px;
              background-color: transparent;
              border: 1px solid #d5d2dc;
              border-radius: 20%;
              transition: all 0.2s ease-in-out;
            }

            .check:hover input ~ .checkmark {
              background-color: #ccc;
            }

            .check input:checked ~ .checkmark {
              background-color: #fd5631;
            }

            .checkmark:after {
              content: '';
              position: absolute;
              display: none;
            }

            .check input:checked ~ .checkmark:after {
              display: block;
            }

            .check .checkmark:after {
              left: 5px;
              top: 1px;
              width: 2px;
              height: 7px;
              border: solid white;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
          .especification {
            margin: 10px;
            padding: 10px 0px;

            hr {
              margin-top: 5px;
              border-bottom: none;
              border-color: #d5d2dc;
            }
            h3 {
              margin-bottom: 10px;
              color: #fefcff;
            }
            .price {
              margin-bottom: 10px;
              color: #fd5631;
            }
            .location {
              display: flex;
              align-items: center;
              img {
                width: 20px;
              }
              p {
                color: #d5d2dc;
                margin-left: 5px;
                font-weight: 300;
              }
            }
          }
          .info-car {
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-around;

            img {
              padding: 5px 0px;
              width: 25px;
              height: 25px;
            }
            div {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0px 5px;
              width: 40%;
              background-color: #1f1b2c;
              border-radius: 1rem;

              p {
                margin-top: -5px;
                color: #fefcff;
                margin-bottom: 5px;
                font-weight: 300;
                font-size: 0.8rem;
              }
            }
          }
        }
      }
      .card-right-down {
        display: flex;
        height: 47.5%;
        background: rgba(255, 255, 255, 0.04);
        box-shadow: 0px 2px 8px -4px rgba(31, 27, 45, 0.12),
          0px 4px 16px rgba(31, 27, 45, 0.12);
        border-radius: 1.2rem;

        img {
          height: 100%;
          border-radius: 1.2rem 0rem 0rem 1.2rem;
        }
        .card-right-down-infos {
          height: 100%;
          width: 100%;

          .ano-compare {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;

            p {
              color: #fefcff;
              font-weight: 300;
              margin-left: 10px;
            }

            .check {
              display: block;
              position: relative;
              padding-left: 24px;
              cursor: pointer;
              font-size: 14px;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }

            .check p {
              padding-top: 1px;
              margin-right: 10px;
              margin-left: -3px;
            }

            .check input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
            }

            .checkmark {
              margin-top: 1px;
              position: absolute;
              top: 0;
              left: 0;
              height: 14px;
              width: 14px;
              background-color: transparent;
              border: 1px solid #d5d2dc;
              border-radius: 20%;
              transition: all 0.2s ease-in-out;
            }

            .check:hover input ~ .checkmark {
              background-color: #ccc;
            }

            .check input:checked ~ .checkmark {
              background-color: #fd5631;
            }

            .checkmark:after {
              content: '';
              position: absolute;
              display: none;
            }

            .check input:checked ~ .checkmark:after {
              display: block;
            }

            .check .checkmark:after {
              left: 5px;
              top: 1px;
              width: 2px;
              height: 7px;
              border: solid white;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
          .especification {
            margin: 10px;
            padding: 10px 0px;

            hr {
              margin-top: 5px;
              border-bottom: none;
              border-color: #d5d2dc;
            }
            h3 {
              margin-bottom: 10px;
              color: #fefcff;
            }
            .price {
              margin-bottom: 10px;
              color: #fd5631;
            }
            .location {
              display: flex;
              align-items: center;
              img {
                width: 20px;
              }
              p {
                color: #d5d2dc;
                margin-left: 5px;
                font-weight: 300;
              }
            }
          }
          .info-car {
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-around;

            img {
              padding: 5px 0px;
              width: 25px;
              height: 25px;
            }
            div {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0px 5px;
              width: 40%;
              background-color: #1f1b2c;
              border-radius: 1rem;

              p {
                margin-top: -5px;
                color: #fefcff;
                margin-bottom: 5px;
                font-weight: 300;
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
`
