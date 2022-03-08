import { v4 as uuid } from 'uuid';
import { BirthdayPerson } from '../../entities/BirthdayPerson';
import { IBirthdayPersonRepository } from '../IBirthdayPersonRepository';

class BirthdayPersonRepositoryInMemory implements IBirthdayPersonRepository {
  private birthdayPerson: BirthdayPerson[] = [];

  // eslint-disable-next-line @typescript-eslint/require-await
  async save(birthdayPerson: BirthdayPerson): Promise<BirthdayPerson> {
    Object.assign(birthdayPerson, {
      id: uuid()
    });

    this.birthdayPerson.push(birthdayPerson);
    return birthdayPerson;
  }
}

export { BirthdayPersonRepositoryInMemory };
