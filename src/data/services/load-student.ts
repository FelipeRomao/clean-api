import { LoadStudentRepository } from "@/data/contracts";
import { StudentModel } from "@/data/models";
import { LoadStudent } from "@/domain/usecases";

export class LoadStudentService implements LoadStudent {
  constructor(private readonly loadStudentRepository: LoadStudentRepository) {}

  async getAll(): Promise<StudentModel[]> {
    return await this.loadStudentRepository.getAllStudents();
  }
}
