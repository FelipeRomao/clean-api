import { LoadStudent } from "@/domain/usecases";
import {
  Controller,
  HttpResponse,
  ok,
  serverError,
} from "@/presentation/contracts";
import { StudentViewModel } from "@/presentation/view-models";

export class LoadStudentController implements Controller {
  constructor(private readonly loadStudent: LoadStudent) {}

  async handle(): Promise<HttpResponse<StudentViewModel[]>> {
    try {
      const students = await this.loadStudent.getAll();
      return ok(StudentViewModel.mapCollection(students));
    } catch (error) {
      return serverError(error);
    }
  }
}
