import { adaptResolver } from "@/main/adapters";
import { makeLoadStudentController } from "@/main/factories";

export default {
  Query: {
    students: async (): Promise<any> =>
      await adaptResolver(makeLoadStudentController()),
  },
};
