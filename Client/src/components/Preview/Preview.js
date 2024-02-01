import style from './style.module.css'

function Preview() {
    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.previewContent}>
                    <div className={style.previewInfo}>
                        <p className={style.textPlatform}>E-COURSE PLATFORM</p>
                        <h1>Learning and teaching online, made easy.</h1>
                        <p className={style.textAdditional}>Any subject, in any language, on any device, for all ages!</p>
                        <div className={style.btn}>About platform</div>
                        <div className={style.statistics}>
                            <div className={style.imgZipper}></div>
                            <p className={style.studentsCount}>600<span>+</span>
                            </p>
                        </div>
                        <p className={style.textStudents}>Students</p>
                    </div>
                    <div className={style.previewImg}></div>
                </div>
            </div>


            <div className={style.learnContent}>

                <div className={style.learnInfo}>
                    <div className={style.learnImg}></div>
                    <div className={style.textStyle}>
                        <h2>Learn a language in a playful way</h2>
                        <p>Make learning programming languages more fun with
                            mini-games</p>

                        <div className={style.downstairsImg}>
                            <div className={style.sneakersImg}></div>
                            <div className={style.loudspeakerImg}></div>
                        </div>
                    </div>
                </div>
            </div>




            <div className={style.knowledgeContent}>
                <div className={style.knowledgeInfo}> 
                    <div className={style.textBlock}>
                        <h1>Increase your knowledge</h1>
                        <p>Traditional and new effective approaches to learning languages</p>
                        <button className={style.btn}>Textbook→</button>
                    </div>
                    <div className={style.knowledgeImg}></div>
                </div>
            </div>



            <div className={style.progressContent}>
                <div className={style.progressInfo}>
                <div className={style.progressImg}></div>
                    <div className={style.textProgress}>
                        <h2>Watch your progress every day</h2>
                        <p>Save statistics on your achievements and mistakes</p>
                        <button className={style.btnProgress}>Statistics→</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Preview