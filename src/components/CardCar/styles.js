import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 410px;
  border-radius: 1.2rem;
  background-color: #282435;
  margin: 0px 5px;

  img {
    border-radius: 1.2rem 1.2rem 0rem 0rem;
  }
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
    padding: 0px 0px;

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
      border-radius: 1.2rem;

      p {
        margin-top: -5px;
        color: #fefcff;
        margin-bottom: 5px;
        font-weight: 300;
      }
    }
  }
`
export const Use = styled.p`
  position: absolute;
  margin-top: 10px;
  margin-left: 20px;
  background-color: ${(props) => props.bgColor};
  padding: 5px;
  border-radius: 5px;
  color: white;
  font-weight: 300;
  width: 50px;
  text-align: center;
`
