import style from './style.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SingleCourse() {
    const { id } = useParams()
    const [languages, setLanguages] = useState([{}])

    async function getLanguagesId() {
        const response = await axios.get(`http://localhost:3001/course/${id}`)
        setLanguages(response.data);
    }

    useEffect(() => {
        getLanguagesId()
    }, [])

    return (<>
        <Header></Header>
        <div className={style.allBox}>
            <div className={style.wrapper}>
                <div className={style.item}>
                    <div className={style.img}></div>
                    <div className={style.infoFromCourses}>
                        <h1>{languages[0]?.course}</h1>
                        <p>{languages[0]?.description}</p>
                    </div>
                </div>
                <button>Go to course</button>
            </div>
            <div className={style.boxLessons}>
                <h1>15 lessons</h1>
                <ol>
                    <li>1.Test</li>
                    <li>2.Test</li>
                    <li>3.Test</li>
                    <li>4.Test</li>
                    <li>5.Test</li>
                    <li>6.Test</li>
                </ol>
            </div>
        </div>
        <Footer></Footer>
    </>);
}

export default SingleCourse;