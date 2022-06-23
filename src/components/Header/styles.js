import styled from 'styled-components'

export const Container = styled.header`
  width: inherit;
  height: 40.3rem;
  justify-content: space-between;

  & .text-img {
    width: inherit;
    margin-top: 7rem;
    display: flex;
    justify-content: center;
  }

  & .h1-p {
    width: 46%;
  }

  & .text-img h1 {
    width: 27.6rem;
    height: 11.6rem;
    color: #fefcff;
    font-weight: 700;
    font-size: 3rem;
    line-height: 130%;
  }

  & .text-img p {
    width: 22rem;
    height: 3.1rem;
    color: #d5d2dc;
    margin-top: -2rem;
    /* large/regular */
    font-weight: 300;
    font-size: 1rem;
    line-height: 150%;

    opacity: 0.7;
  }

  & .text-img #orange-car {
    width: 38.6rem;
    margin-top: 40px;
  }

  & .tabs {
    display: flex;
    align-items: flex-start;
    width: 55%;
    height: 3rem;

    margin-bottom: 1rem;
  }

  & .tabs button {
    width: 5rem !important;
    height: 2.5rem;
    border-radius: 0.5rem;

    font-weight: 400;
    font-size: 1rem;
    border: none;
    margin-right: 10px;
  }

  & .tabs #new {
    width: 7.2rem;
    background: #fff;

    /* shadow/large */
    box-shadow: 0px 4px 12px -6px rgba(31, 27, 45, 0.2),
      0px 8px 16px rgba(31, 27, 45, 0.16);

    line-height: 150%;
    color: #fd5631;

    &:active {
      background-color: #fd5631;
      color: #fefcff;
    }
  }

  & .tabs #used {
    width: 8rem;
    background: rgba(255, 255, 255, 0.04);
    color: #fefcff;
    font-weight: 400;

    &:hover {
      background-color: #fefcff;
      color: #fd5631;
    }
    &:active {
      background-color: #fd5631;
      color: #fefcff;
    }
  }

  /* input-group */
  & .input-group {
    width: 100%;
    height: 3.8rem;
    display: flex;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);

    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  & .input-group form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .input-group input {
    width: 8.2rem;
    margin: 0.8rem;
    background-color: transparent;
    border: none;
    color: #d5d2dc;
  }

  & #submit {
    width: 10rem;
    height: 3rem;
    background: #fd5631;
    border-radius: 0.6rem;
    opacity: 1;
    color: #fefcff;
    margin-right: 8px;
  }

  & .input-group #submit:hover {
    opacity: 0.4;
  }
`
