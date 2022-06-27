import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin-bottom: 30px;

  .top-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    h2 {
      color: #fefcff;
    }
  }

  .top-info-right {
    display: flex;
    justify-content: space-around;
    margin: 0px 5px;
    align-items: center;

    p {
      margin: 0px 10px;
      background-color: red;
      padding: 5px;
      border-radius: 5px;
      font-weight: 300;

      &.usado {
        background-color: white;
        color: #fd5631;

        &:active {
          color: white;
          background-color: #fd5631;
        }
      }

      &.novo {
        background-color: #282435;
        color: white;

        &:hover {
          background-color: white;
          color: #fd5631;
        }
        &:active {
          color: white;
          background-color: #fd5631;
        }
      }
    }
    a {
      text-decoration: none;
    }

    span {
      color: #d5d2dc;
      margin-right: 5px;
      font-weight: 300;
    }
  }
  .cards {
    display: flex;
    justify-content: space-between;
    border: solid 1px red;
    max-width: 100vw;
    flex: none;
  }
  .status-carrosel {
    text-align: center;
    img {
      margin: 15px 5px;
    }
  }
`
