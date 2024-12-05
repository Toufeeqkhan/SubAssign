import './DayBar.css'

function getDayName(dayNumber) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[dayNumber];
}

function getMonthName(monthNumber) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[monthNumber];
}

function formatDate(date) {
  return date < 10 ? `0${date}` : date;
}


export default function DayBar() {
  const date = new Date();
  const currentDayDate = formatDate(date.getDate());
  const currentDayName = getDayName(date.getDay());
  const currentMonth = getMonthName(date.getMonth());

  return (
    <section className='day-bar'>
      <div className="day-bar-top">
        <h1 className='date'>{currentDayDate}</h1>
        <h1 className='month'>{currentMonth}</h1>
        <h1 className='day'>{currentDayName}</h1>
      </div>
    </section>
  );
}
