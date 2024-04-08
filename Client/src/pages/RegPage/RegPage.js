import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../Input/Input"
import style from './style.module.css'
import axios from "axios";

function RegPage() {
    const [inp, setInp] = useState({})

    async function checkData() {
        try{
            if(!inp.name||!inp.surname||!inp.email||!inp.pwd) throw new Error('ошибка')

            const response = await axios.post("http://localhost:3001/api/reg", inp)
            console.log(response);
        }catch(error){
           alert(error.message)
        }
       
    }

    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Name...',
            inputType: 'text',
            name: 'name'
        },
        {
            id: 4,
            placeholderValue: 'Enter Surname...',
            inputType: 'surname',
            name: 'surname'
        },
        {
            id: 2,
            placeholderValue: 'Enter Password...',
            inputType: 'password',
            name: 'pwd'
        },
        {
            id: 3,
            placeholderValue: 'Enter Email...',
            inputType: 'email',
            name: 'email'
        }
    ]


    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.reg}>
                    <h1>Sign up</h1>
                    {inputArray.map((el) => <Input  inp={inp} setInp={setInp} el={el}></Input>)}
                    <button onClick={checkData} className={style.btn}>Sign up</button>
                </div>
                <div className={style.regImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RegPage;