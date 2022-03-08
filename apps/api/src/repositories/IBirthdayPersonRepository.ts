import { BirthdayPerson } from '../entities/BirthdayPerson';

export interface IBirthdayPersonRepository {
  save(birthdayPerson: BirthdayPerson): Promise<BirthdayPerson>;
}
