"use client";
import TabList from "@/UI/TabList/TabList";
import s from "./page.module.css";
import Tab from "@/UI/Tab/Tab";
import Input from "@/UI/Input/Input";
import Button from "@/UI/Button/Button";
import { useState } from "react";
import { useRouter } from 'next/navigation'

async function login(email: string, password: string) {
    const res = await fetch("https://f6f1-194-186-53-192.ngrok-free.app/login", {
        method: "POST",
        body: JSON.stringify({
            "username": email,
            "password": password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(e => e.json())
    .then(e => localStorage.setItem("token", e.accessToken))
}

export default function Auth() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState("")
  const [password, setPassword]= useState("")

  const router = useRouter()

  function onSubmit(e: any) {
    e.preventDefault()
    login(email, password).then(() => {
        router.push("/")
    })
  }

  return (
    <main className={s.loginPage}>
        <div className={s.LoginBody}>
            <h1>
                Авторизация
            </h1>
            <form target="_self" onSubmit={onSubmit}>
                <TabList>
                    <Tab id={0} active={activeTab} setActive={setActiveTab}>Рекрутер</Tab>
                    <Tab id={1} active={activeTab} setActive={setActiveTab}>Руководитель</Tab>
                </TabList>
                <Input 
                    type="text"
                    autoComplete="username"
                    placeHolder="Введите e-mail"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    autoComplete="current-password"
                    placeHolder="Введите пароль"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button>Войти</Button>
            </form>
        </div>
    </main>
  );
}
