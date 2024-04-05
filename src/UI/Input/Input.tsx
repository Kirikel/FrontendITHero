import s from "./Input.module.scss"

type InputProps = {
    type: string,
    autoComplete: string,
    placeHolder: string,
    required: boolean,
    value: string,
    onChange: () => void
}

export default function Input(props: InputProps) {
    return (
        <input 
            className={s.Input} 
            type={props.type}
            autoComplete={props.autoComplete}
            placeholder={props.placeHolder}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
        />
    )
}