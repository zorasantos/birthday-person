import { BirthdayPerson } from "../../entities/BirthdayPerson";
import { IBirthdayPersonRepository } from "../../repositories/IBirthdayPersonRepository";
import { ICreateBirthdayPersonRequestDTO } from "./CreateBirthdayPersonDTO";

export class CreateBirthdayPersonUseCase {

  constructor(
    private birthdayPersonRepository: IBirthdayPersonRepository
  ) {}
  async execute(data: ICreateBirthdayPersonRequestDTO) {
    console.log('data', data)
    const birthdayPersonAlreadyExist = await this.birthdayPersonRepository.findByName(data.name)

    if(birthdayPersonAlreadyExist) {
      throw new Error('Aniversariante já cadastrado!')
    }

    const birthdayPerson = new BirthdayPerson(data);
    await this.birthdayPersonRepository.save(birthdayPerson);
  }
}