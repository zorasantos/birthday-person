import { PrismaBirthdayPersonRepository } from "../../repositories/implementations/PrismaBirthdayPersonRepository";
import { CreateBirthdayPersonController } from "./CreateBirthdayPersonController";
import { CreateBirthdayPersonUseCase } from "./CreateBirthdayPersonUseCase";

const prismaBirthdayPersonRepository = new PrismaBirthdayPersonRepository()

const createBirthdayPersonUseCase = new CreateBirthdayPersonUseCase(
  prismaBirthdayPersonRepository
)

const createBirthdayPersonController = new CreateBirthdayPersonController(
  createBirthdayPersonUseCase
)

export { createBirthdayPersonUseCase, createBirthdayPersonController }