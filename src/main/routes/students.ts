import { adaptRoute } from "@/main/adapters";
import { makeLoadStudentController } from "@/main/factories";
import { Router } from "express";

export default (router: Router): void => {
  router.get("/students", adaptRoute(makeLoadStudentController()));
};
