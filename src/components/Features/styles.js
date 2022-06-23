import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: inherit;
  margin-bottom: 50px;

  .top-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 80px;

    h2 {
      color: #fefcff;
    }
    .pesquisa-vender {
      a {
        text-decoration: none;
      }
      span {
        color: #d5d2dc;
        font-weight: 300;
      }
      img {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }

  .features-container {
    display: flex;
    justify-content: space-between;

    .title-left {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
    }

    .title-right {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 10px;
    }

    .feature-left {
      text-align: right;
      margin-bottom: 50px;
      float: right;

      h3 {
        margin-right: 10px;
        color: #fefcff;
      }
      p {
        margin-right: 30px;
        width: 300px;
        color: #d5d2dc;
      }
    }

    .feature-right {
      text-align: left;
      margin-bottom: 50px;
      width: 330px;
      h3 {
        margin-left: 10px;
        color: #fefcff;
      }
      p {
        margin-left: 30px;
        width: 300px;
        color: #d5d2dc;
      }
    }

    .auto-road {
      width: 6rem;
      height: 100%;
      margin-top: -98px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .features-column-right {
      width: 40%;
    }
    .features-column-left {
      width: 40%;
    }
  }
`
