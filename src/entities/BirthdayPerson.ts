import { v4 as uuidv4 } from 'uuid';
export class BirthdayPerson {
  public readonly id!: string;

  public name!: string;
  public birth_date!: string;

  constructor(props: Omit<BirthdayPerson, 'id'>, id?: string) {
    Object.assign(this, props);
    if(!id) {
      this.id = uuidv4()
    }
  }
}