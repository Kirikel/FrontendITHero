import { useEffect } from "react";
import s from "./TabList.module.scss"


export default function TabList({
    children,
  }: Readonly<{
    children: React.ReactNode[];
}>) {
    useEffect(() => {
        console.log(children)
    }, [])
   
    return (
        <div className={s.TabList}>
            {children}
        </div>
    )
}