import { BirthdayPerson } from "../../entities/BirthdayPerson";
import { IBirthdayPersonRepository } from "../../repositories/IBirthdayPersonRepository";
import { ICreateBirthdayPersonRequestDTO } from "./CreateBirthdayPersonDTO";

export class CreateBirthdayPersonUseCase {

  constructor(
    private birthdayPersonRepository: IBirthdayPersonRepository
  ) {}
  async execute(data: ICreateBirthdayPersonRequestDTO) {
    const birthdayPerson = new BirthdayPerson(data);
    return await this.birthdayPersonRepository.save(birthdayPerson);
  }
}