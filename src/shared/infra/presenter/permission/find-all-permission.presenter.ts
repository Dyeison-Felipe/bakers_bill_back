export class FindAllPermission {
  readonly id: string;
  readonly action: string;
  readonly subject: string;
  readonly description: string;

  constructor(props: FindAllPermission) {
    this.id = props.id;
    this.action = props.action;
    this.subject = props.subject;
    this.description = props.description;
  }
}
