import { BirthdayPerson } from "../entities/BirthdayPerson";

export interface IBirthdayPersonRepository {
  findByName(name: string): Promise<BirthdayPerson>
  save(birthdayPerson: BirthdayPerson): Promise<void>
}