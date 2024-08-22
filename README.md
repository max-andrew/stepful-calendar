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


## Requirements

Assignment
Kickoff (video call): Once you get these instructions you are good to start.
Take-home (~3 hours): You will get as far as you can building a full-stack website (details below), don’t worry if you can’t finish everything. Once you are done, send your code in a Github repo using the form at the bottom of this document. (For private Github repos, share with: @wyattades, @PetrMitsel, @eserra, @KeanuH95, @sarajculhane, @meyburdj, and @DanialBetres). We will then review your code and your recruiter will work with you to schedule a Review call if the feedback is positive.
If you have questions in the meantime, reach out to your recruiter! 

Take-home prompt: a Coaching Conundrum
Stepful is getting too busy! We have hundreds of 1-on-1 coaching calls between our students and coaches, and we need you to build a website to manage their scheduling.
Your website should satisfy the following user stories:
Coaches can add slots of availability to their calendars. These slots are always 2 hours long and each slot can be booked by exactly 1 student.
Coaches can view their own upcoming slots.
Students can book upcoming, available slots for any coach.
When a slot is booked, both the student and coach can view each other’s phone-number.
After they complete a call with a student, coaches will record the student’s satisfaction (an integer 1-5) and write some free-form notes.
Coaches should be able to review their past scores and notes for all of their calls.
For the sake of testing, we should be able to easily switch between being a coach vs. a student.
To save time, you don’t need to worry about a user-creation flow nor authentication, just make sure to create some users in your database for testing!
Technologies:
Make sure to use the following technologies for this project:
a frontend framework: e.g. React/Typescript, etc.
a backend: e.g. Ruby on Rails, Next.js, etc.
a database: e.g. PostgreSQL, MySQL, etc.
In the space below, please include your GitHub repository link (1 link only please) as well as any notes that you'd like the reviewers to consider while viewing your submission. If you have a personal website or side project(s) you'd like to share, feel free to include them, too! 






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
