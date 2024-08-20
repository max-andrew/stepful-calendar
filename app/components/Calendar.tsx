import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p class="italic">Select a date and time for your meeting</p>
      <br />
      <DatePicker
        selected={props.startDate}
        onChange={(date: Date | null) => props.setStartDate(date)}
        showTimeSelect
        minDate={new Date()}
        // filterDate={isWeekday}
        // filterTime={filterPassedTime}
      />
    </div>
  );
}
