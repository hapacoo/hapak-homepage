import { WrapperBurger } from "./BurgerStyle";

interface IBurgerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }

const BurgerIcon :React.FC<IBurgerProps> = ({open, setOpen}) => {

    return (
        <WrapperBurger open={open} onClick={()=>setOpen(!open)}>
            <div />
            <div />
            <div />
        </WrapperBurger>
    )
}

export default BurgerIcon