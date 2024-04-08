import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../Input/Input"
import style from './style.module.css'
import axios from 'axios'

function RegPage() {
    const [inp, setInp] = useState({ email: '', pwd: '' })

    async function clickButton() {
        const response = await axios.post("http://localhost:3001/api/auth", inp,
            {
                withCredentials: true,
            })
        console.log(response);
    }



    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Email...',
            inputType: 'text',
            name: 'email'
        },
        {
            id: 2,
            placeholderValue: 'Enter Password...',
            inputType: 'password',
            name: 'pwd'
        }
    ]


 
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.auth}>
                    <h1>Login</h1>
                    {inputArray.map((el) => <Input inp={inp} setInp={setInp} el={el}></Input>)}
                
                    <button onClick={clickButton} className={style.btn}>Login</button>
                </div>
                <div className={style.authImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RegPage;