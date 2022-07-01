import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await api.json();
    setSearchedRecipes(recipes.result);
    console.log(recipes)
  }

  useEffect(() => {
    getSearched(params.searched);
  }, [params.searched])

  return (
    <div>Searched</div>
  )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }    
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }`;


export default Searched