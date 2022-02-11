import { prismaClient } from "../../database/prismaClient";
import { PostgresBirthdayPersonRepository } from "../../repositories/implementations/PostgresBirthdayPersonRepository";
import { CreateBirthdayPersonController } from "./CreateBirthdayPersonController";
import { CreateBirthdayPersonUseCase } from "./CreateBirthdayPersonUseCase";

const postgresBirthdayPersonRepository = new PostgresBirthdayPersonRepository(prismaClient)

const createBirthdayPersonUseCase = new CreateBirthdayPersonUseCase(
  postgresBirthdayPersonRepository
)

const createBirthdayPersonController = new CreateBirthdayPersonController(
  createBirthdayPersonUseCase
)

export { createBirthdayPersonUseCase, createBirthdayPersonController }