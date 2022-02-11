import { BirthdayPerson } from "../../entities/BirthdayPerson";
import { IBirthdayPersonRepository } from "../../repositories/IBirthdayPersonRepository";
import { ICreateBirthdayPersonRequestDTO } from "./CreateBirthdayPersonDTO";

export class CreateBirthdayPersonUseCase {

  constructor(
    private birthdayPersonRepository: IBirthdayPersonRepository
  ) {}

  async execute(data: ICreateBirthdayPersonRequestDTO) {
    const birthdayPersonCreate = BirthdayPerson.create(data);
    const result = await this.birthdayPersonRepository.save(birthdayPersonCreate);
    return result
  }
}