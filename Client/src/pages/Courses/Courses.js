import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'
import ItemCourse from "../../components/Item.Course/Item.Course";

function Courses() {
    return (
        <>
            <Header></Header>

            <div className={style.wrapper}>
                <div className={style.item}>
                    <div className={style.courses}>
                        <div className={style.img}></div>
                    </div>
                    <ItemCourse></ItemCourse>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default Courses;