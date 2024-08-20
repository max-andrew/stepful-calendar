"use client";

import React, { useState, useEffect } from "react";

import { StudentWidget } from "./components/StudentWidget";
import { CoachWidget } from "./components/CoachWidget";

import Image from "next/image";

import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isStudent, setIsStudent] = useState<boolean>(true);
  const [userId, setUserId] = useState<number | string>("");

  const userTitle: string = isStudent ? "Student" : "Coach";

  useEffect(() => {
    // Reset userId whenever isStudent changes
    setUserId(null);
  }, [isStudent]);

  const handleUserIdChange = (value: string) => {
    // Allow blank input
    if (value === "") {
      setUserId("");
      return;
    }

    // Ensure userId is a number and contains no letters or other characters
    const numericValue = parseInt(value);
    if (!isNaN(numericValue)) {
      setUserId(numericValue);
    }
  };

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

      {!isStudent ? (
        <StudentWidget startDate={startDate} setStartDate={setStartDate} />
      ) : (
        <CoachWidget startDate={startDate} setStartDate={setStartDate} />
      )}

      <br />
      <br />
      <br />
      <br />

      <div class="border-2 border-slate-500/20 bg-slate-400/20 rounded px-24 py-6">
        <p class="font-semibold">Testing control panel</p>

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
            maxlength="3"
            value={userId !== null ? userId : ""}
            onChange={(e) => handleUserIdChange(e.target.value)}
            class="max-w-12"
          />
        </div>
      </div>
    </main>
  );
}
