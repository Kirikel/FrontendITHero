import { ReactNode } from "react"
import s from "./BoardLayout.module.scss"

type BoardLayoutProps = { 
    children: ReactNode,
    href?: string,
    className?: string,
    onClick?: (e: any) => void
}

export default function BoardLayout({children, href, onClick, className} : BoardLayoutProps) {
    return (
        <a href={href ? href : ""} className={[s.BoardLayout, className].join(" ")} onClick={onClick ? onClick : () => {}}>
            {children}
        </a>
    )
}