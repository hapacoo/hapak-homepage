import { useRouter } from "next/router"
import { useCallback } from "react"

export const useMoveToCharacter = () => {
    const router = useRouter()

    const onClickMoveToCharacter = useCallback((page:string) => ()=>{
        void router.push(`/${page}`)
    },[])

    return {onClickMoveToCharacter}

}