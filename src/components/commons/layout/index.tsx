import { ReactNode } from "react";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
    children : ReactNode
}

export default function Layout(props: ILayoutProps) {
    return (
        <>
            <LayoutNavigation />
        </>
    )
}