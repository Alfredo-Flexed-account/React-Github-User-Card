import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
  margin-top: 2%;
  border-radius: 5px;
`;

const Cards = props => {
    return (
      <Container>
        <img src={props.img} alt={""} />
        <p>{props.name}</p>
      </Container>
    );
  };

export default Cards