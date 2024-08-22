import { NextResponse } from "next/server";
import { db } from "@/lib/database";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const studentId = Number(params.id);

  if (isNaN(studentId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const student = await db
    .selectFrom("students")
    .where("id", "=", studentId)
    .selectAll()
    .executeTakeFirst();

  if (!student) {
    return NextResponse.json({ error: "Student not found" }, { status: 404 });
  }

  return NextResponse.json(student);
}
