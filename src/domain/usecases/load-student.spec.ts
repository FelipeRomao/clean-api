import { Student } from "@/domain/models";

class RegisterStudentUseCase {
  async register({ name, email }: Student): Promise<Student> {
    const student = { name, email };

    return student;
  }
}

describe("RegisterStudentUseCase", () => {
  it("PASSOU FAST", async () => {
    const registerStudent = new RegisterStudentUseCase();

    const student = await registerStudent.register({
      name: "Felipe Romao",
      email: "feliperomao.a@gmail.com",
    });

    expect(student.name).toBe("Felipe Romao");
  });
});
