import { useEffect, useRef, useState } from 'react';
import style from './style.module.css'
import Pagination from '@mui/lab/Pagination';
import { Link } from 'react-router-dom';
import axios from 'axios'

function ItemCourse() {
    const [languages, setLanguages] = useState([{}])

    async function getLanguages() {
        const response = await axios.get('http://localhost:3001/course')
        setLanguages(response.data);
    }

    useEffect(() => {
        getLanguages()
    }, [])

    const [theOriginalNumberOfPages, setTheOriginalNumberOfPages] = useState(1)
    const howManyPagesAreCutOff = useRef(3)

    const lastLanguage = theOriginalNumberOfPages * howManyPagesAreCutOff.current;
    const firstLanguage = lastLanguage - howManyPagesAreCutOff.current;
    const theRightValue = languages.slice(firstLanguage, lastLanguage);
    return (
        <div>
            {theRightValue.map((el, index) =>
                <Link key={index} to={`/${el.id}`}>
                    <div className={style.wrapper}>
                        <div className={style.item}>
                            <div className={style.img1}></div>
                            <div className={style.textBlock}>
                                <h1>{el.course}</h1>
                                <div className={style.line}></div>
                                <p>{el.description}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
            <div className={style.pagination}>
                <Pagination
                    count={Math.ceil(languages.length / howManyPagesAreCutOff.current)}
                    size="large"
                    onChange={(e, value) => setTheOriginalNumberOfPages(value)}
                />
            </div>
        </div>
    )
}

export default ItemCourse;