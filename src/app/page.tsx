"use client";
import Vacancy from "@/UI/Vacancy/Vacancy";
import styles from "./page.module.css";
import BoardLayout from "@/UI/BoardLayout/BoardLayout";
import Progress from "@/UI/Progress/Progress";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const CalendarCustom = dynamic(() => import('@/UI/Calendar/Calendar'), {
  ssr: false, 
  loading: () => <div className={styles.CalendarSkeleton}></div>,
})
export default function Home() {
  const router = useRouter()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (localStorage.getItem("token") != null) {} 
    else {
      router.push("/login")
    }
  }, [])
  return (
    <main className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.vacanciesList}>
          <Vacancy id={1} deadline="01.01.2023">UX/UI-дизайнер</Vacancy>
          <Vacancy id={2} deadline="01.01.2023">UX/UI-дизайнер</Vacancy>
          <Vacancy id={3} deadline="01.01.2023">UX/UI-дизайнер</Vacancy>
          <BoardLayout onClick={() => console.log("click")}>
            <div className={styles.AddVacancy}>
              <p>Добавить вакансию</p>
              <div className={styles.AddVacancyPlus}>
                <p className={styles.Plus}>+</p>
              </div>
            </div>
          </BoardLayout>
        </div>
        <div className={styles.AcceptList}>
          <h1>Ожидают подтверждения</h1>
          <div className={styles.ProgressList}>
            <Progress 
              progress={50}
              count={2}
            >Middle frontend-разработчик</Progress>
            <Progress 
              progress={30}
              count={2}
            >Middle frontend-разработчик</Progress>
            <Progress 
              progress={80}
              count={2}
            >Middle frontend-разработчик</Progress>
            <Progress 
              progress={80}
              count={2}
            >Middle frontend-разработчик</Progress>
            <Progress 
              progress={80}
              count={2}
            >Middle frontend-разработчик</Progress>
          </div>
        </div>
        <div className={styles.CalendarWrapper}>
          <CalendarCustom/>
        </div>
      </div>
    </main>
  );
}
