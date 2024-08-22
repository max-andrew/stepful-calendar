## Set up Database

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE coaches (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE sessions (
    session_id SERIAL PRIMARY KEY,
    coach_id INTEGER NOT NULL REFERENCES COACHES(id),
    student_id INTEGER NOT NULL REFERENCES STUDENTS(id),
    start_date_time TIMESTAMP NOT NULL,
    student_satisfaction INTEGER CHECK(student_satisfaction BETWEEN 1 AND 5),
    coach_notes TEXT
);

CREATE TABLE availabilities (
    id SERIAL PRIMARY KEY,
    coach_id INTEGER NOT NULL REFERENCES coaches(id),
    start_date_time TIMESTAMP NOT NULL,
    student_id INTEGER REFERENCES students(id)
);



CREATE INDEX idx_sessions_coach_id ON sessions (coach_id);
CREATE INDEX idx_sessions_student_id ON sessions (student_id);

CREATE INDEX idx_availabilities_coach ON availabilities (coach_id);
CREATE INDEX idx_availabilities_coach_time ON availabilities (coach_id, start_time);
CREATE INDEX idx_availabilities_student ON availabilities (student_id);



INSERT INTO coaches (name, phone_number)
VALUES ('
Mel B
', '212-340-4827');

INSERT INTO coaches (name, phone_number)
VALUES ('
Melanie C
', '212-024-9034');

INSERT INTO coaches (name, phone_number)
VALUES ('Emma Bunton', '212-113-8301');

INSERT INTO coaches (name, phone_number)
VALUES ('
Geri Halliwell
', '212-422-4238');

INSERT INTO coaches (name, phone_number)
VALUES ('
Victoria Beckham 
', '212-103-9942');


INSERT INTO students (name, phone_number)
VALUES ('
John Lennon
', '410-203-4294');

INSERT INTO students (name, phone_number)
VALUES ('
Paul McCartney
', '410-432-0234');

INSERT INTO students (name, phone_number)
VALUES ('
George Harrison
', '410-331-2349');

INSERT INTO students (name, phone_number)
VALUES ('
Ringo Starr
', '410-552-4321');



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
