import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  background-color: gray;
  width: 100%;
  text-align: center;

  > div {
    margin-top: -0.5rem;
    display: flex;
    justify-content: space-around;
  }
`;
