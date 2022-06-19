import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 124.14%;
  align-items: center;
  background-color: #272236;
  font-size: 0.8rem;

  hr {
    margin-top: 15px;
    width: 100%;
    border-bottom: none;
    border-color: #d5d2dc;
  }

  .container-footer-header {
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    margin-top: 20px;

    .link-logo {
      margin: 0px 20px;
    }

    .location-footer {
      display: flex;
      width: 15%;
      align-items: center;
      justify-content: space-around;

      p {
        color: #d5d2dc;
      }
    }
  }

  .footer-informations {
    max-width: 129.6rem;
    width: 80%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      color: #fefcff;
      margin-bottom: 20px;
    }

    a {
      color: #d5d2dc;
      text-decoration: none;
    }

    input {
      color: #fefcff;
      padding: 0px 10px;
    }
    li {
      list-style-type: none;
    }

    button {
      border: none;
      width: 39px !important;
      height: 39px !important;

      &:active {
        opacity: 0.4;
      }
    }
    /*=== .subscribe ===*/
    .subscribe {
      width: 30.6rem;
      height: 13.9rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      margin: 5.6rem 0;
    }

    /* Cadastre-se na newsletter */
    .subscribe h2 {
      margin-top: -89px;
      width: 30.6rem;
      height: 1rem;
      color: #fefcff;

      /* Font */
      font-weight: 700;
      font-size: 1.5rem;
    }

    .subscribe p {
      width: 19.7rem;
      color: #d5d2dc;
      margin-left: -25px;

      /* Font */
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;

      display: flex;
      justify-content: center;
      align-items: center;

      opacity: 0.7;
    }

    /* input-group */
    .input-group {
      width: 20.6rem;
      height: 3rem;
      display: flex;
      margin-bottom: 140px;
      justify-content: space-between;
      align-items: center;

      border-radius: 0.8rem;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    /* input */
    .input-group input {
      width: 14.5rem;
      height: 2.1rem;
      display: flex;
      align-items: center;
      background-color: transparent;
      opacity: 0.5;

      border: none;

      margin: 1.6rem;
    }

    /* btn */
    .input-group button {
      width: 3rem;
      height: auto;
      background-color: transparent;

      margin: 0.8rem;
    }

    /*=========== footer section ================*/

    .footer-informations section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .footer-informations section h3 {
      height: 1rem;

      /* Font */
      font-weight: 700;
      font-size: 1rem;
      line-height: 150%;
      color: #fefcff;
      margin-bottom: 1.2rem;
    }

    .menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }

    /*=== .buy-sell ===*/
    .menu {
      height: 121px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      opacity: 0.7;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
    }

    /*=== .about ===*/
    .about {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    /*=== profile ===*/
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-right: 10px;
      margin-left: 10px;
    }

    /*=== .contacts-social ===*/
    .contacts-social {
      width: 9rem;
      height: 12rem;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .contacts {
      width: 17.8rem;
      height: 5.6rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .contacts a {
      display: flex;
      align-items: center;

      width: 133px;
      height: 24px;
    }

    .contacts a img {
      margin-right: 0.8rem;
    }

    #phone {
      width: 13.3rem;
      height: 2.4rem;

      display: flex;
      align-items: center;
    }

    #email {
      display: flex;
      align-items: center;

      width: 17.8rem;
      height: 2.4rem;
    }

    .social {
      width: 15.2rem;
      height: 3.2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 3.2rem;
    }

    #messenger {
      width: 5.4rem;
      height: auto;
    }

    .social a {
      width: 3.2rem;
      height: 3.2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      &:last-child {
        margin-top: 15px;
      }
    }
  }
  /*============= .footer-bottom ================== */

  .footer-bottom {
    max-width: 129.6rem;
    width: 80%;
    height: 1rem;
    color: #d5d2dc;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Font */
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 150%;

    margin-top: -150px;
    opacity: 0.7;
    margin-bottom: 30px;
  }

  /* menu-secondary */
  .menu-secondary {
    width: 29.5rem;
    height: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    opacity: 0.7;
  }

  .menu-secondary a {
    display: flex;
    color: #fffdff;
    text-decoration: none;
  }
`
