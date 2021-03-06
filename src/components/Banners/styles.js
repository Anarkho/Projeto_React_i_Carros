import styled from 'styled-components'

export const Container = styled.section`
  .banner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: inherit;
    height: 35vh !important;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    margin-bottom: 40px;
  }

  .banner-top-right {
    width: 250px;
    margin-left: 30px;
    & h2 {
      color: #fefcff;
      margin-top: 10px;
    }
    p {
      color: #d5d2dc;
      margin-top: 20px;
    }
    button {
      width: 9.8rem;
      height: 2.5rem;
      color: #fefcff;
      text-align: center;
      padding: 10px 24px;
      border: none;
      background-color: #fd5631;
      border-radius: 8px;
      margin-top: 40px;

      &:active {
        background-color: #fd3131;
      }
    }
  }

  .products {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 400px;
    margin-top: -144px;

    a {
      text-decoration: none;
      text-align: center;
      color: #fefcff;

      &:hover {
        background-color: #1f1b2c;
        border-radius: 1.2rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
      }
    }
  }
`
