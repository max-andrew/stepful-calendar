"use client";

import React, { useState } from "react";

import Image from "next/image";

import Toggle from "react-toggle";
import "react-toggle/style.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isStudent, setIsStudent] = useState<boolean>(true);

  const userTitle: string = isStudent ? "Student" : "Coach";

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image
        src="/stepful.webp"
        alt="Description of the image"
        width={180}
        height={60}
      />

      <br />
      <br />
      <br />

      <div className="flex flex-row align-items-center">
        <Toggle
          id="user-status"
          defaultChecked={isStudent}
          icons={false}
          onChange={() => setIsStudent(!isStudent)}
        />
        <p>&nbsp;</p>
        <label htmlFor="user-status">{userTitle} mode</label>
      </div>

      <br />
      <br />

      <div className="flex flex-row align-items-center">
        <label htmlFor="user-id">{userTitle} id</label>
        <p>&nbsp;</p>
        <input type="number" id="user-id" />
      </div>

      <br />
      <br />
      <br />

      <div>
        <p>Select a date and time for your meeting</p>
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          showTimeSelect
          minDate={new Date()}
          // filterDate={isWeekday}
          // filterTime={filterPassedTime}
        />
      </div>
    </main>
  );
}
