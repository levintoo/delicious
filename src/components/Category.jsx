import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

function Category() {
  return (
    <div>
        <List>
        <NavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </NavLink>
        </List>
    </div>
  )
}

const List = styled.div`
    min-height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 2rem;
`;

export default Category