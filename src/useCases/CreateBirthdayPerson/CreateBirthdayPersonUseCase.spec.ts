import { PostgresBirthdayPersonRepository } from '../../repositories/implementations/PostgresBirthdayPersonRepository'
import { prismaMock } from '../../../singleton'
test('should create new birthday person ', async () => {
  const method = new PostgresBirthdayPersonRepository(prismaMock)

  const birthdayPerson = {
    id: "0a9bf762-bd86-4e0f-b96f-e607467ea179",
    name: 'Rich',
    birth_date: "2000-02-11T13:03:05.279Z"
  }

  prismaMock.birthdayPerson.create({
    data: birthdayPerson
  })

  await expect(method.save(birthdayPerson )).resolves.toEqual({
    id: "0a9bf762-bd86-4e0f-b96f-e607467ea179",
    name: 'Rich',
    birth_date: "2000-02-11T13:03:05.279Z"
  })
})