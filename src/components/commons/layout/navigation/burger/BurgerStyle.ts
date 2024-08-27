import styled from "@emotion/styled";

interface IStyledBurgerProps {
    open: boolean;
  }

export const WrapperBurger = styled.div`
    position: relative;
    color: #fff;
    background: #000;
    height: 100vh;
    position: fixed;
    width: 90px;
    /* margin-left: -95px; */
    z-index: 10;


    @media (max-width: 576px) {
        width: 40px;
        /* margin-left: -40px; */
        text-align: center;
    }
`

export const BurgerBox = styled.button<IStyledBurgerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: absolute;
    top: 5%;
    left: 20%;
    width: 60%;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    /* padding: 0; */

    @media (max-width: 576px) {
        width: 90%;
        height: 1.6rem;
        left:10%

    }

    &:focus{
        outline: none;
    }

    div {
        width: 100%;
        height: 0.4rem;
        background-color: #fff;
        background: white;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        

        &:first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        width: ${({ open }) => open ? '107%' : 'rotate(0)'};
        }

        &:nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        width: ${({ open }) => open ? '107%' : 'rotate(0)'};

        }
    }
`;

