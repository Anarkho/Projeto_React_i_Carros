import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: solid 1px white;

  .top-info {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

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
      border: solid 1px blue;

      .carrosel {
        img {
          border-radius: 1.2rem;
          width: 100%;
        }
      }

      .mini-imagens {
        display: flex;
        margin-top: 5px;
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
    }
    .coluna-right {
      width: 45%;
      border: solid 1px yellow;
    }
  }
`
