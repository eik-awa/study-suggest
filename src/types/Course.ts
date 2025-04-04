export interface Course {
  title: string;
  link: string;
  description: string;
  image: string;
}

export interface Courses {
  [key: string]: Course[];
}
