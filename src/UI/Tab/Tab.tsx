import { Dispatch, SetStateAction, useEffect, useState } from "react";
import s from "./Tab.module.scss"


export default function Tab({
    children, active, setActive, id
  }: Readonly<{
    id: number,
    children: React.ReactNode,
    active: number,
    setActive: Dispatch<SetStateAction<number>>
  }>) {
    const [activeState, setActiveState] = useState(false)
    useEffect(() => setActiveState(active == id), [active])

    const onClickHandler = () => setActive(id);
    
    return ( 
        <div 
          className={s.Tab} onClick={onClickHandler}
          style={activeState ? {"color": "var(--white)", "background": "#4A586E"} : {}}
        >
            {children}
        </div>
    )
}