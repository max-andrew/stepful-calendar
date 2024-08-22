import type { ColumnType } from "kysely";

export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Availabilities {
  coach_id: number;
  id: Generated<number>;
  start_date_time: Timestamp;
  student_id: number | null;
}

export interface Coaches {
  id: Generated<number>;
  name: string;
  phone_number: string;
}

export interface Sessions {
  coach_id: number;
  coach_notes: string | null;
  session_id: Generated<number>;
  start_date_time: Timestamp;
  student_id: number;
  student_satisfaction: number | null;
}

export interface Students {
  id: Generated<number>;
  name: string;
  phone_number: string;
}

export interface DB {
  availabilities: Availabilities;
  coaches: Coaches;
  sessions: Sessions;
  students: Students;
}
