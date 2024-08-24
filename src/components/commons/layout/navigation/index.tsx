import { useRef, useState } from "react"
import BurgerIcon from "./burger/Burger"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import NavigationMenu from "./menu/Menu"

export default function LayoutNavigation ():JSX.Element {
    const [open, setOpen] = useState(false)
    const node = useRef<HTMLDivElement>(null)
    useOnClickOutside(node, () => setOpen(false))

    return (
        <>
            <div ref={node}>
                <BurgerIcon open={open} setOpen={setOpen} />
                <NavigationMenu open={open}/>
            </div>
        
        </>
    )
}