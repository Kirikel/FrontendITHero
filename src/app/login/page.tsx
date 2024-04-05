"use client";

import TabList from "@/UI/TabList/TabList";
import s from "./page.module.css";
import Tab from "@/UI/Tab/Tab";
import Input from "@/UI/Input/Input";
import Button from "@/UI/Button/Button";
import { useState } from "react";

export default function Login() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState("")
  const [password, setPassword]= useState("")
  return (
    <main className={s.loginPage}>
        <div className={s.LoginBody}>
            <h1>
                Авторизация
            </h1>
            <form>
                <TabList>
                    <Tab id={0} active={activeTab} setActive={setActiveTab}>Рекрутер</Tab>
                    <Tab id={1} active={activeTab} setActive={setActiveTab}>Руководитель</Tab>
                </TabList>
                <Input 
                    type="email"
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
