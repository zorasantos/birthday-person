import { PrismaClient } from "@prisma/client";
import { BirthdayPerson } from "../../entities/BirthdayPerson";
import { IBirthdayPersonRepository } from "../IBirthdayPersonRepository";

export class PostgresBirthdayPersonRepository implements IBirthdayPersonRepository {
  constructor(
    private readonly prisma: PrismaClient
  ) {}

  async save(birthdayPerson: BirthdayPerson): Promise<void> {
      await this.prisma.birthdayPerson.create({
        data: {
          name: birthdayPerson.name,
          birth_date: birthdayPerson.birth_date
        }
      })
  }
}