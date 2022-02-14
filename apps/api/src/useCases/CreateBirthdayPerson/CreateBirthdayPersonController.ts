import { Request, Response } from 'express';
import { CreateBirthdayPersonUseCase } from './CreateBirthdayPersonUseCase';

class CreateBirthdayPersonController {
  constructor(private createBirthdayPersonUseCase: CreateBirthdayPersonUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, birthDate, cellphone } = req.body;

    try {
      await this.createBirthdayPersonUseCase.execute({
        name,
        birthDate,
        cellphone
      });

      return res.status(201).send({ name, birthDate, cellphone });
    } catch (err: unknown | any) {
      return res.status(400).json({
        message: err.message || 'Erro inesperado!'
      });
    }
  }
}

export { CreateBirthdayPersonController };
