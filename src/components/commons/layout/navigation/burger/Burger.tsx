import { BurgerBox, WrapperBurger } from "./BurgerStyle";

interface IBurgerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }

const BurgerIcon :React.FC<IBurgerProps> = ({open, setOpen}) => {

    return (
        <WrapperBurger>
            <BurgerBox open={open} onClick={()=>setOpen(!open)}>
                <div />
                <div />
                <div />
            </BurgerBox>
        </WrapperBurger>
    )
}

export default BurgerIcon