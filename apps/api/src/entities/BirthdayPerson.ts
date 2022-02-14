import { v4 as uuidv4 } from 'uuid';

class BirthdayPerson {
  public readonly id?: string;

  public name!: string;

  public cellphone!: string;

  public birthDate!: Date;

  private constructor(props: Omit<BirthdayPerson, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    }
  }

  static create({ name, birthDate, cellphone }: BirthdayPerson) {
    const birthdayPerson = new BirthdayPerson({ name, birthDate, cellphone });
    return birthdayPerson;
  }
}

export { BirthdayPerson };
