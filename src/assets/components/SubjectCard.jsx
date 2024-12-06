import './SubjectCard.css'

export default function SubCard(props){
    return (
        <div className="sub-card">
            <div className="top">
            <p>Lecture {props.lectureNumber}</p>
            <p>{props.time}</p>
            </div>
            <h3>{props.subjectName}</h3>
        </div>
    )
}