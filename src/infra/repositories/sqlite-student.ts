import { LoadStudentRepository } from "@/data/contracts";
import { StudentModel } from "@/data/models";
import { students } from "@/infra/data-sources";

export class SQLiteStudentRepository implements LoadStudentRepository {
  async getAllStudents(): Promise<StudentModel[]> {
    return students.map((student) => ({
      name: student.display_name,
      ...student,
    }));
  }
}
