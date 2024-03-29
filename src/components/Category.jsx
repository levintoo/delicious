import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

function Category() {
  return (
    <div>
        <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
        </List>
    </div>
  )
}

const List = styled.div`
    min-height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 1.3rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;  
    margin: 1rem;
    text-decoration: none; 
    width: 6.5rem;
    height: 6.5rem;
    background: linear-gradient(35deg, #494949, #313131);
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        margin-top: 0.3rem;
        color: white;
        font-size: 0.95rem;
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94857);
        svg {
        color: white;
        }
        h4 {
        color: white;
        }
    }
    `;

export default Category