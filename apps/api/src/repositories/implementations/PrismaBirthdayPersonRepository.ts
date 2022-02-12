import { prismaClient } from '../../database/prismaClient';

import { BirthdayPerson } from '../../entities/BirthdayPerson';
import { IBirthdayPersonRepository } from '../../repositories/IBirthdayPersonRepository';

class PrismaBirthdayPersonRepository implements IBirthdayPersonRepository {
  async save(birthdayPerson: BirthdayPerson): Promise<BirthdayPerson> {
    const birthdayPersonCreated = await prismaClient.birthdayPerson.create({
      data: {
        name: birthdayPerson.name,
        birth_date: birthdayPerson.birth_date
      }
    });

    return birthdayPersonCreated;
  }
}

export { PrismaBirthdayPersonRepository };
