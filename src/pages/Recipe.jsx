import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipe = await api.json();
    setDetails(recipe);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button>Instructions</Button>
        <Button>Ingredients</Button>
        </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  img {
    max-width: 70%;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background:white;
  border: 2px solid black;
  margin-right: 1.6rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe