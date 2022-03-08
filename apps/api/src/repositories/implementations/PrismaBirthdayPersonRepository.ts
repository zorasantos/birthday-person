import { prismaClient } from '../../database/prismaClient';

import { BirthdayPerson } from '../../entities/BirthdayPerson';
import { IBirthdayPersonRepository } from '../IBirthdayPersonRepository';

class PrismaBirthdayPersonRepository implements IBirthdayPersonRepository {
  async save(birthdayPerson: BirthdayPerson): Promise<BirthdayPerson> {
    const birthdayPersonCreated = await prismaClient.birthdayPerson.create({
      data: {
        name: birthdayPerson.name,
        birthDate: birthdayPerson.birthDate,
        cellphone: birthdayPerson.cellphone
      }
    });

    return birthdayPersonCreated;
  }
}

export { PrismaBirthdayPersonRepository };
