import { PostgresBirthdayPersonRepository } from "../../repositories/implementations/PostgresBirthdayPersonRepository";
import { CreateBirthdayPersonController } from "./CreateBirthdayPersonController";
import { CreateBirthdayPersonUseCase } from "./CreateBirthdayPersonUseCase";

const postgresBirthdayPersonRepository = new PostgresBirthdayPersonRepository()

const createBirthdayPersonUseCase = new CreateBirthdayPersonUseCase(
  postgresBirthdayPersonRepository
)

const createBirthdayPersonController = new CreateBirthdayPersonController(
  createBirthdayPersonUseCase
)

export { createBirthdayPersonUseCase, createBirthdayPersonController }