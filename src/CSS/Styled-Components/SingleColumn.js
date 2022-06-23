import styled from "styled-components";

const SingleColumn = styled.span`
  position: relative;
  height: ${(props) => props.columnHeight + "px"};
  width: 36px;
  margin: 10px 5px;
  background-color: hsl(10, 79%, 65%);
  border-radius: 5px;
  transition: background-color 0.15s ease-in-out;

  @media (min-width: 576px) {
    justify-content: center;
    height: ${(props) => (props.columnHeight / 1.3) + "px"};
    width: 50px;
    margin: 10px 8px;
    }

  &:hover {
    cursor: pointer;
    background-color: hsl(186, 34%, 60%);
  }

  &:after {
    content: "${(props) => props.amount}";
    font-size: 0.85rem;
    font-weight: 700;
    color: white;
    /* display: none; */ // I'm not sure how to get opacity transition to work with display: none
    display: grid;
    place-items: center;
    position: absolute;
    width: 60px;
    height: 30px;
    top: -35px;
    left: -10px;
    background-color: hsl(25, 47%, 15%);
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
    z-index: 1;

    @media (min-width: 576px) {
        left: -5px;
    }
  }

  &:hover:after {
    opacity: 1;
  }
`;

export default SingleColumn;