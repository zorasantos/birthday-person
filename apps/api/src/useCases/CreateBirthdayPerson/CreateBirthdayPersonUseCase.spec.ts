import { BirthdayPerson } from '../../entities/BirthdayPerson';
import { IBirthdayPersonRepository } from '../../repositories/IBirthdayPersonRepository';
import { BirthdayPersonRepositoryInMemory } from '../../repositories/in-memory/BirthdayPersonRepositoryInMemory';
import { CreateBirthdayPersonUseCase } from './CreateBirthdayPersonUseCase';

let birthdayPersonRepository: IBirthdayPersonRepository;
let CreateBirthdayPerson: CreateBirthdayPersonUseCase;

beforeAll(() => {
  birthdayPersonRepository = new BirthdayPersonRepositoryInMemory();
  CreateBirthdayPerson = new CreateBirthdayPersonUseCase(birthdayPersonRepository);
});

test('should create new birthday Person ', async () => {
  const birthdayPerson: BirthdayPerson = {
    name: 'Birthday Person',
    birth_date: new Date()
  };

  const result = await CreateBirthdayPerson.execute(birthdayPerson);

  expect(result).toHaveProperty('id');
  expect(result.name).toBe('Birthday Person');
});
