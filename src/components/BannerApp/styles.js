import styled from 'styled-components'

export const Container = styled.section`
  .container-app {
    display: flex;
    width: inherit;
    justify-content: space-around;
    margin: 50px 0px;
  }

  .setas {
    display: flex;
    margin-left: -30px;

    img:hover {
      opacity: 0.4;
    }
    img:last-child {
      margin-top: -7px;
    }
  }

  .apps {
    margin-top: 100px;
    width: 40%;
    margin-left: -100px;
    h2 {
      color: #fefcff;
    }
    p {
      margin-top: 40px;
      margin-bottom: 40px;
      color: #d5d2dc;
    }
  }
  .btns {
    margin-left: -20px;
  }
`
