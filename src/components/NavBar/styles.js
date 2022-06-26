import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  height: 10vh;
  width: inherit;
  align-items: center;
  font-size: 0.8rem;

  .link-logo {
    margin: 0px 20px;
  }
  .links-menu {
    margin: 0px 20px;
    text-decoration: none;
    color: #d5d2dc;
    font-weight: bold;
    letter-spacing: 2px;

    &:hover {
      color: #666276;
    }
  }
  .container-menu {
    display: flex;
    width: inherit;
    align-items: center;
    justify-content: space-between;
  }
  .container-entrar-vender {
    display: flex;
    margin: 0px 20px;
    align-items: center;

    a {
      margin-left: 10px;
      font-weight: bold;
      color: #d5d2dc;
      letter-spacing: 2px;
      text-decoration: none;

      &:hover {
        color: #666276;
      }
    }

    button {
      background-color: #fd5631;
      color: #f9f8fa;
      width: 11rem;
      height: 2.5rem;
      border-radius: 10px;
      font-size: 1rem;
      margin-left: 20px;
      border: none;

      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: #fd3131;
      }
    }
  }
`
