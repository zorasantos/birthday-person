import { Request, Response } from "express";
import { CreateBirthdayPersonUseCase } from "./CreateBirthdayPersonUseCase";

class CreateBirthdayPersonController {
  constructor(
    private createBirthdayPersonUseCase: CreateBirthdayPersonUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, birth_date } = req.body;

    try {
     await this.createBirthdayPersonUseCase.execute({
        name,
        birth_date
      })

      return res.status(201).send({ name, birth_date })
    } catch (err: unknown | any) {
      return res.status(400).json({
        message: err.message || 'Erro inesperado!'
      })
    }
  }
}

export { CreateBirthdayPersonController }