import { Student } from "@/domain/models";

export interface LoadStudent {
  getAll: () => Promise<Student[]>;
}
