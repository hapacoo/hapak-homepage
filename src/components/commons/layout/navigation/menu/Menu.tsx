//프롭스 드릴링 

import React from "react"
import { useMoveToCharacter } from "../../../hooks/useMoveToCharacter"
import { WrapperMenu } from "./MenuStyle"
import { NAGICATIONS_HAPAK } from "../../../../../../pages/hapak"

interface INaviMenuProps {
    open: boolean
    isAdmin?:boolean
}

const NavigationMenu: React.FC<INaviMenuProps> = ({open, isAdmin = false}) =>{
    const {onClickMoveToCharacter} = useMoveToCharacter()

    const menus = NAGICATIONS_HAPAK 

return (
    <WrapperMenu open={open}>
        {menus.map((el)=>(
            <a key={el.name} onClick={onClickMoveToCharacter(el.page)}>
                {el.name}
            </a>
        ))}
    </WrapperMenu>
    )
}

export default NavigationMenu