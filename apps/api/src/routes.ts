import { Router } from 'express';
import { createBirthdayPersonController } from './useCases/CreateBirthdayPerson';

const router = Router();

const create = createBirthdayPersonController;

router.post('/birthdayPerson', (req, res) => {
  return createBirthdayPersonController.handle(req, res);
});

export { router };
