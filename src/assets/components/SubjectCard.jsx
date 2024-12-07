import './SubjectCard.css'

export default function SubCard({lectureNumber,time,subjectName}){
    return (
        <div className="sub-card">

            <div className="top">
            <p>Lecture {lectureNumber}</p>
            <p>{time}</p>
            </div>
            <h2 className='subject-name'>{subjectName}</h2>

            <form className='book-form' action="#">
            <div className="topic-input">
            <label htmlFor="topic">Topic</label>
            <input id="topic" type="text" />
            </div>

            <div className="assignment-input">
            <label htmlFor="assignment">Assignment</label>
            <input id="assignment" type="text" />
            </div>

            <button className='add-btn'>Add</button>
            </form>
        </div>
    )
}

