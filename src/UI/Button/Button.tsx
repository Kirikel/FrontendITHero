import s from "./Button.module.scss"

type ButtonProps = {
    children: React.ReactNode,
    action?: () => void
}

export default function Button({ children, action }: ButtonProps) {
    return (
        <button onClick={action} className={s.Button}>
            { children }
        </button>
    )
}