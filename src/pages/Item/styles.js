import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .top-info {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-bottom: 20px;

    .top-icones {
      img {
        margin: 0px 10px;
        padding: 5px;
        border-radius: 10px;
        &:first-child {
          padding: 6px;
          background-color: #282435;
        }
        &:last-child {
          background-color: white;
        }
      }
    }
  }

  .colunas {
    display: flex;
    justify-content: space-between;

    .coluna-left {
      display: flex;
      flex-direction: column;
      width: 55%;
      //border: solid 1px blue;
      height: max-content;
      .carrosel {
        display: flex;
        overflow-y: hidden;
        overflow-x: auto;
        scroll-behavior: smooth;
        height: 82%;
        flex: none;
        border-radius: 1.2rem 1.2rem 0rem 0rem;

        &::-webkit-scrollbar {
          display: none;
        }

        & img {
          width: 100%;
          height: 100vh;
          border-radius: 1.2rem 1.2rem 0rem 0rem;
          object-fit: contain;
          margin-top: -130px;
        }
      }

      a {
        color: #fd5631;
        font-weight: 300;
      }
      hr {
        margin-top: 20px;
        margin-bottom: 20px;
        opacity: 0.4;
        color: red;
      }
      .setas {
        width: 30px;
        height: 30px;
        cursor: pointer;

        &:hover {
          border-radius: 15px;
          background-color: #fd5631;
        }
        &:nth-child(1) {
          position: absolute;
          right: 0;
          margin-top: 13%;
          margin-right: 88.5%;
          float: right;
        }
        &:nth-child(2) {
          position: absolute;
          right: 0;
          margin-top: 13%;
          margin-right: 46%;
          transform: rotate(180deg);
          float: right;
        }
      }

      .mini-imagens {
        display: flex;
        margin-top: -105px;
        flex: none;
        img {
          margin: 0px 5px;
          border-radius: 1rem;
          width: 18%;
          object-fit: cover;

          &:hover {
            border: solid 1px #fd5631;
          }
        }
      }

      h3 {
        margin-top: 30px;
        color: white;
        margin-bottom: 20px;
      }
      h5 {
        color: white;
        margin: 5px 0px;
      }

      .especification {
        .espec {
          display: flex;
          align-items: center;

          p {
            margin-left: 5px;
            font-size: 0.9rem;
            color: #ccc;
            font-weight: 300;
          }
        }
      }
      .qualidade {
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
        border-radius: 1rem;
        background-color: #282435;
        align-items: center;
        padding: 15px;
        margin-bottom: 20px;

        .div-qualidade {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          img {
            margin-bottom: 5px;
          }
          p {
            color: #ccc;
            font-weight: 300;
          }
        }
      }
      .lorem {
        font-size: 0.9rem;
        color: #ccc;
        font-weight: 300;
      }

      .referencias {
        display: flex;

        hr {
          height: 2.5vh;
          margin: 1px 20px;
        }

        .ref-info {
          display: flex;

          p {
            color: #ccc;
            font-weight: 300;
            font-size: 0.9rem;
          }
          .p-bold {
            margin-left: 5px;
            font-weight: 400;
          }
        }
      }
    }
    .coluna-right {
      width: 45%;
      margin-left: 20px;

      h2,
      h3 {
        margin-top: 50px;
        color: white;
      }

      .kilo-location {
        display: flex;
        align-items: center;
        padding: 10px 0px;

        p {
          margin-left: 5px;
          color: #ccc;
          font-weight: 300;
        }
        a {
          color: #ccc;
        }

        hr {
          height: 2vh;
          margin: 0px 15px;
        }
      }

      .container {
        border-radius: 1.2rem;
        background-color: #282435;
        height: 37vh;
        padding: 20px;
        margin-top: 20px;

        p {
          color: white;
          font-weight: 300;
        }

        a {
          color: #ccc;
          font-weight: 300;
          font-size: 0.8rem;
        }
        .caracteristicas {
          display: flex;
          margin-top: 10px;
          margin-bottom: 10px;

          span {
            color: #ccc;
            font-weight: 300;
            font-size: 0.9rem;
            margin-left: 5px;
          }
          p {
            margin-left: 3px;
            margin-top: 10px;
            font-weight: 400;
            margin-bottom: 3px;
          }
          img {
            margin-right: 5px;
          }
        }

        .container-tel {
          margin-top: 20px;
          display: flex;
          padding: 10px;
          background-color: #1f1b2c;
          width: max-content;
          border: 1px solid white;
          border-radius: 0.5rem;
          width: 130px;
          justify-content: center;

          p {
            margin-left: 5px;
          }
        }
        .email {
          text-decoration: none;
        }
        .container-email {
          margin-top: 20px;
          display: flex;
          padding: 10px;
          background-color: #fd5631;
          width: max-content;
          border: 1px solid white;
          border-radius: 0.5rem;
          width: 130px;
          justify-content: center;

          p {
            margin-left: 5px;
          }
        }
      }
      .container-down {
        border-radius: 1.2rem;
        border: solid 2px #282435;
        height: 30vh;
        padding: 20px;
        margin-top: 20px;

        h3 {
          margin: 0px;
        }

        .input-group {
          margin-top: 30px;
          height: 2.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);

          img {
            margin-left: 10px;
          }

          span {
            margin-left: 10px;
            color: #ccc;
            font-weight: 300;
            font-size: 0.9rem;
          }
        }

        /* input */
        .input-group input {
          width: 24.5rem;
          height: 1rem;
          display: flex;
          align-items: center;
          background-color: transparent;
          opacity: 0.5;
          color: #ccc;
          border: none;
          padding: 5px;
          margin: 1.6rem;
        }

        /* btn */
        .input-group button {
          width: 10rem;
          height: 2.2rem;
          border: none;
          background-color: #fd5631;
          color: white;
          border-radius: 0.5rem;
          margin: 0.8rem;

          &:active {
            opacity: 0.4;
          }
        }

        .check {
          margin-top: 20px;
          display: block;
          position: relative;
          padding-left: 24px;
          cursor: pointer;
          font-size: 14px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          width: 25.5rem;
        }

        .check p {
          padding-top: 1px;
          margin-right: 10px;
          margin-left: -3px;
          color: #ccc;
          font-weight: 300;
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
    }
  }
`
