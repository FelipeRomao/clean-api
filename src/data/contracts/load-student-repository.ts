import { StudentModel } from "@/data/models";

export interface LoadStudentRepository {
  getAllStudents: () => Promise<StudentModel[]>;
}
