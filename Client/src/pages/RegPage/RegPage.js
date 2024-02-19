import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../Input/Input"
import style from './style.module.css'

function RegPage() {
    const inputArray = [
        {
            id:1,
            placeholderValue:'Enter Name...',
            inputType:'text'
        },
        {
            id:2,
            placeholderValue:'Enter Password...',
            inputType:'password'
        },
        {
            id:3,
            placeholderValue:'Enter Email...',
            inputType:'email'
        },
        {
            id:4,
            placeholderValue:'Enter Surname...',
            inputType:'surname'
        },
    ]

    const result = inputArray.map((el)=>{
        return <Input el={el}></Input>
    })
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.reg}>
                    <h1>Sign up</h1>
                 {result}
                    <button className={style.btn}>Sign up</button>
                </div>
                <div className={style.regImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RegPage;