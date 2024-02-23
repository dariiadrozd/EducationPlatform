import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../Input/Input"
import style from './style.module.css'

function RegPage() {
    const inputArray = [
        {
            id:1,
            placeholderValue:'Enter Email...',
            inputType:'text'
        },
        {
            id:2,
            placeholderValue:'Enter Password...',
            inputType:'password'
        }
    ]

    const result = inputArray.map((el)=>{
        return <Input el={el}></Input>
    })
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.auth}>
                    <h1>Login</h1>
                 {result}
                    <button className={style.btn}>Login</button>
                </div>
                <div className={style.authImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RegPage;