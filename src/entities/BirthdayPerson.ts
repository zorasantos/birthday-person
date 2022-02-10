import { uuid } from "uuidv4";

export class BirthdayPerson {
  public readonly id!: string;

  public name!: string;
  public birth_date!: Date;

  constructor(props: Omit<BirthdayPerson, 'id'>, id?: string) {
    Object.assign(this, props);
    // this.name = props.name
    // this.birth_date = props.birth_date

    if(!id) {
      this.id = uuid()
    }
  }
}