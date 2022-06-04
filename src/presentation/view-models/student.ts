import { Student } from "@/domain/models";

export class StudentViewModel {
  display_name: string;
  contact: string;
  phones?: Phone[];

  static map(entity: Student): StudentViewModel {
    return {
      ...entity,
      display_name: entity.name,
      contact: entity.email,
    };
  }

  static mapCollection(entities: Student[]): StudentViewModel[] {
    return entities.map((entity) => StudentViewModel.map(entity));
  }
}

type Phone = {
  countryCode: string;
  DDD: string;
  number: string;
};
