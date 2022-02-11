import { BirthdayPerson } from "../../entities/BirthdayPerson";
import { IBirthdayPersonRepository } from "../../repositories/IBirthdayPersonRepository";
import { v4 as uuid } from "uuid";

class BirthdayPersonRepositoryInMemory implements IBirthdayPersonRepository {
  private birthdayPerson: BirthdayPerson[] = [];

  async save(birthdayPerson: BirthdayPerson): Promise<BirthdayPerson> {
    Object.assign(birthdayPerson, {
      id: uuid(),
    });

    this.birthdayPerson.push(birthdayPerson);
    return birthdayPerson;
  }
}

export { BirthdayPersonRepositoryInMemory };
