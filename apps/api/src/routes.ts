import { Router } from 'express';
import { createBirthdayPersonController } from './useCases/CreateBirthdayPerson';

const router = Router();

router.post('/birthdayPerson', (req, res) => {
  return createBirthdayPersonController.handle(req, res);
});

export { router };
