import React, { useState, useEffect } from "react";
import { Calendar } from "./Calendar";

interface StudentWidgetProps {
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
}

export function StudentWidget(props: StudentWidgetProps) {
  const [sessionBooked, setSessionBooked] = useState<boolean>(true);

  if (sessionBooked) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="italic">Hello Maxwell</p>

        <br />
        <br />

        <p className="font-semibold">You have an upcoming session!</p>

        <br />
        <br />

        <p>
          with Andrew on
          <br />
          <span className="underline">August 20th at 12:30PM</span>
          <br />
          <br />
          calling from
          <br />
          <span className="underline">(202) 404-6006</span>
        </p>
      </div>
    );
  } else {
    return (
      <Calendar startDate={props.startDate} setStartDate={props.setStartDate} />
    );
  }
}
