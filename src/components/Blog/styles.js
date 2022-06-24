import styled from 'styled-components'

export const Container = styled.section`
  .blog {
    margin-bottom: 60px;
  }

  .blog-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      color: #fefcff;
    }
    span {
      color: #d5d2dc;
      font-weight: 300;
      margin-right: 10px;
      text-align: center;
    }
  }

  .blog-cards {
    display: flex;
    justify-content: space-between;

    .automovel {
      width: 350px;
    }

    .title {
      h4 {
        color: #fd5631;
        text-transform: uppercase;
        font-weight: 300;
        margin: 10px 0px;
      }
      p {
        margin-bottom: 10px;
        color: #d5d2dc;
      }
    }
    .author {
      display: flex;

      div {
        color: #fefcff;
      }

      .author-info {
        margin-left: 10px;
      }
    }
  }
`
