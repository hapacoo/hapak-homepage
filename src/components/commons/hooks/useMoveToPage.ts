import { useRouter } from "next/router"
import { useCallback } from "react"

export const useMoveToPage = () => {
    const router = useRouter()

    const onClickMoveToPage = useCallback((page:string) => ()=>{
        void router.push(`/${page}`)
    },[])

    return {onClickMoveToPage}

}