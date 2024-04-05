import { ReactNode } from "react"
import s from "./Progress.module.scss"

type ProgressProps = {
    children: ReactNode,
    progress: number, 
    count: number
}

function getColor(progress: number) {
    if (progress < 33) {
        return "#FF0F00"
    } else if (progress < 66) {
        return "#FF9900"
    } else {
        return "#0B9E08"
    }
}

export default function Progress({ progress, children, count } : ProgressProps) {
    const color = getColor(progress)
    return (
        <div className={s.ProgressWrapper}>
            <div 
                className={s.Progress} 
                style={{"color": color, "background": color+"26"}}
            >{progress}</div>
            <div className={s.Info}>
                <h2>{children}</h2>
                <div>
                    <div></div>
                    <p>кандидатов: {count}</p>
                </div>
            </div>
        </div>
    )
}