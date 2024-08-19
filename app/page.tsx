"use client";

import Image from "next/image";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </main>
  );
}
