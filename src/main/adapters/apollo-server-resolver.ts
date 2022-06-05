import { Controller } from "@/presentation/contracts";
import { StudentViewModel } from "@/presentation/view-models";

export const adaptResolver = async (
  controller: Controller
): Promise<StudentViewModel> => {
  const httpResponse = await controller.handle();
  return httpResponse.data;
};
