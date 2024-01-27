interface iUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    pwd: string;
  }

  interface iCourses{
    id: number;
    course: string;
  }
  
  export {iUser, iCourses}