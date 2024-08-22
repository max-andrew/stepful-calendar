import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const { type } = req.query; // Expecting 'student' or 'coach' as type

  if (!id || !type) {
    return res.status(400).json({ error: "ID and type are required" });
  }

  let session;

  if (type === "student") {
    session = await db
      .selectFrom("sessions")
      .leftJoin("coaches", "sessions.coach_id", "coaches.id")
      .where("sessions.student_id", "=", Number(id))
      .andWhere("sessions.start_date_time", ">", new Date())
      .select([
        "sessions.start_date_time",
        "coaches.name as coach_name",
        "coaches.phone_number as coach_phone_number",
      ])
      .executeTakeFirst();
  } else if (type === "coach") {
    session = await db
      .selectFrom("sessions")
      .leftJoin("students", "sessions.student_id", "students.id")
      .where("sessions.coach_id", "=", Number(id))
      .andWhere("sessions.start_date_time", ">", new Date())
      .select([
        "sessions.start_date_time",
        "students.name as student_name",
        "students.phone_number as student_phone_number",
      ])
      .executeTakeFirst();
  } else {
    return res.status(400).json({ error: "Invalid type provided" });
  }

  if (session) {
    res.status(200).json(session);
  } else {
    res.status(404).json({ error: "No upcoming sessions found" });
  }
}
