import { Router } from 'express';
import { createBirthdayPersonController } from './useCases/CreateBirthdayPerson';

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/birthdayPerson', (req, res) => {
  return createBirthdayPersonController.handle(req, res);
});


export { router }