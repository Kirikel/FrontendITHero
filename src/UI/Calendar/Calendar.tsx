"use client";
import s from "./Calendar.module.scss"
import 'react-calendar/dist/Calendar.css'; 
import Calendar from "react-calendar"
import BoardLayout from "../BoardLayout/BoardLayout";


export default function CalendarCustom() {
    return (
        <BoardLayout className={s.Calendar}>
            <Calendar />
        </BoardLayout>
    )
}