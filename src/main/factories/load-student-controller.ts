import { LoadStudentService } from "@/data/services";
import { SQLiteStudentRepository } from "@/infra/repositories/sqlite-student";
import { Controller } from "@/presentation/contracts";
import { LoadStudentController } from "@/presentation/controllers";

export const makeLoadStudentController = (): Controller => {
  const repo = new SQLiteStudentRepository();
  const loader = new LoadStudentService(repo);
  return new LoadStudentController(loader);
};
