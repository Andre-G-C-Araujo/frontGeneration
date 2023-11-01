import styled from "styled-components";

export const Container = styled.main`
  background-color: white;
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 6rem auto;
  grid-template-areas:
    "header"
    "content";

  > .hidden {
    > div {
      display: none;
    }
    > section {
      display: flex;
    }
  }

  form {
    grid-area: content;

    width: 35rem;
    height: 40rem;

    text-align: center;
    margin: 2rem auto;

    background-color: gray;
    > section {
      display: none;
    }
    .sectionthree {
      display: flex;
      flex-direction: column;

      > input {
        align-self: center;
        width: 50%;
        border-radius: 0.4rem;
        height: 1.5rem;
      }
      > button {
        margin-top: 0.2rem;
        align-self: center;
        width: 30%;
      }

      > ul {
        list-style: none;
      }
    }
    .sectionfour {
      display: flex;
      flex-direction: column;

      > input {
        align-self: center;
        width: 50%;
        border-radius: 0.4rem;
        height: 1.5rem;
      }
      > button {
        margin-top: 0.2rem;
        align-self: center;
        width: 30%;
      }

      > ul {
        list-style: none;
      }
    }

    > .showSection {
      display: flex;
      flex-direction: column;

      justify-content: center;

      > input {
        padding: 0.5rem;

        margin: 1rem auto;
        width: 6rem;
        height: 1rem;
      }
      > ul {
        > li {
          list-style: none;
        }
      }
    }
  }

  form {
    > .esconder {
      display: none;
    }
    > section {
      > .esconder {
        display: none;
      }
    }
  }
`;
