import { v4 as uuidv4 } from 'uuid';

class BirthdayPerson {
  public readonly id?: string;

  public name!: string;
  public birth_date!: Date;

  private constructor(props: Omit<BirthdayPerson, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    }
  }

  static create({ name, birth_date }: BirthdayPerson) {
    const birthdayPerson = new BirthdayPerson({ name, birth_date });
    return birthdayPerson;
  }
}

export { BirthdayPerson };
