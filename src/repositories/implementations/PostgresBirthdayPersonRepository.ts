// import { prismaClient } from "../../database/prismaClient";
import { BirthdayPerson } from "../../entities/BirthdayPerson";
import { IBirthdayPersonRepository } from "../IBirthdayPersonRepository";

export class PostgresBirthdayPersonRepository implements IBirthdayPersonRepository {
  private birthdayPersons: BirthdayPerson[] = []

  async findByName(name: string): Promise<BirthdayPerson> {
      const birthdayPerson = this.birthdayPersons.find(user => user.name === name)
      return birthdayPerson!;
  }
  async save(birthdayPerson: BirthdayPerson): Promise<void> {
      this.birthdayPersons.push(birthdayPerson)
  }
}