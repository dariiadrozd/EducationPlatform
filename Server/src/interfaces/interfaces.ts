interface iUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  pwd: string;
}

interface iCourses {
  id: number;
  course: string;
}

interface iLessons {
  id: number;
  title: string;
  course_id: number;
}

export { iUser, iCourses, iLessons }