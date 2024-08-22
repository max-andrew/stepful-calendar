import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const coach = await db
      .selectFrom("coaches")
      .where("id", "=", Number(id))
      .selectAll()
      .executeTakeFirst();
    if (coach) {
      res.status(200).json(coach);
    } else {
      res.status(404).json({ error: "Coach not found" });
    }
  } else if (req.method === "PUT") {
    const { name, phoneNumber } = req.body;
    const updatedCoach = await db
      .updateTable("coaches")
      .set({ name, phone_number: phoneNumber })
      .where("id", "=", Number(id))
      .returningAll()
      .executeTakeFirst();
    res.status(200).json(updatedCoach);
  } else if (req.method === "DELETE") {
    await db.deleteFrom("coaches").where("id", "=", Number(id)).execute();
    res.status(204).end();
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
