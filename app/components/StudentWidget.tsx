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
        <p class="italic">Hello Maxwell</p>

        <br />
        <br />

        <p class="font-semibold">You have an upcoming session!</p>

        <br />
        <br />

        <p>
          with Andrew on
          <br />
          <span class="underline">August 20th at 12:30PM</span>
          <br />
          <br />
          calling from
          <br />
          <span class="underline">(202) 404-6006</span>
        </p>
      </div>
    );
  } else {
    return (
      <Calendar startDate={props.startDate} setStartDate={props.setStartDate} />
    );
  }
}
