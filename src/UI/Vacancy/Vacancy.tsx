import BoardLayout from "../BoardLayout/BoardLayout"
import s from "./Vacancy.module.scss"

type VacancyProps = {
    id: number
    children: React.ReactNode,
    deadline: string
}


export default function Vacancy({id, children, deadline}: VacancyProps) {
    return (
        <BoardLayout href={`/vacancy/${id}`}>
            <div className={s.Vacancy}> 
                <div className={s.Title}>{children}</div>
                <div className={s.Deadline}>
                    <p>Дедлайн: {deadline}</p>
                </div>
            </div>
        </BoardLayout>
    )
}