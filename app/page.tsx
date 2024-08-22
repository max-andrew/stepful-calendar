"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/database";

import { Calendar } from "./components/Calendar";
import { CoachWidget } from "./components/CoachWidget";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Image from "next/image";

import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isStudent, setIsStudent] = useState<boolean>(true);
  const [student, setStudent] = useState<any>(null);
  const [userId, setUserId] = useState<number | string>("");
  const [sessionBooked, setSessionBooked] = useState<boolean>(false);
  const [contact, setContact] = useState<{
    name: string;
    phoneNumber: string;
  } | null>(null);

  const userTitle: string = isStudent ? "Student" : "Coach";
  useEffect(() => {
    // Reset userId whenever isStudent changes
    setUserId("");
  }, [isStudent]);

  useEffect(() => {
    if (userId) {
      fetch(`/api/students/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setStudent(null);
          } else {
            setStudent(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching student:", error);
          setStudent(null);
        });
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      const type = isStudent ? "student" : "coach";
      fetch(`/api/sessions/${userId}?type=${type}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setSessionBooked(false);
          } else {
            setSessionBooked(true);
            setStartDate(new Date(data.start_date_time));
            setContact({
              name: isStudent ? data.coach_name : data.student_name,
              phoneNumber: isStudent
                ? data.coach_phone_number
                : data.student_phone_number,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching session:", error);
          setSessionBooked(false);
        });
    }
  }, [userId]);

  const handleUserIdChange = (value: string) => {
    if (value === "") {
      setUserId("");
      return;
    }

    const numericValue = parseInt(value);
    if (!isNaN(numericValue)) {
      setUserId(numericValue);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image
        src="/stepful.webp"
        alt="Stepful wordmark"
        width={180}
        height={60}
      />

      <br />
      <br />
      <br />

      {student ? (
        <p className="italic">Hello {student.name}</p>
      ) : (
        <p>No user available for this id</p>
      )}

      {sessionBooked ? (
        <div className="flex flex-col justify-center items-center">
          <br />
          <br />

          <p className="font-semibold">You have an upcoming session!</p>

          <br />
          <br />

          <p>
            with {contact?.name} on
            <br />
            <span className="underline">{startDate?.toLocaleString()}</span>
            <br />
            <br />
            calling from
            <br />
            <span className="underline">{contact?.phoneNumber}</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p className="italic">Select a date and time for your meeting</p>
          <br />
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            showTimeSelect
            minDate={new Date()}
            // filterDate={isWeekday}
            // filterTime={filterPassedTime}
          />
          <br />
          <button className="underline">Book</button>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="border-2 border-slate-500/20 bg-slate-400/20 rounded px-24 py-6">
        <p className="font-semibold">Testing control panel</p>

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

        <div className="flex flex-row align-items-center justify-center">
          <label htmlFor="user-id">{userTitle} id</label>
          <p>&nbsp;</p>
          <input
            type="text"
            id="userId"
            maxLength={3}
            value={userId !== null ? userId : ""}
            onChange={(e) => handleUserIdChange(e.target.value)}
            className="max-w-12"
          />
        </div>
      </div>
    </main>
  );
}
