import { StateEntity } from "@/core/state/domain/entities/state.entity";

type CityProps = {
  id: string;
  name: string;
  state: StateEntity;
};

export class CityEntity {
  id: string;
  name: string;
  state: StateEntity;

  constructor(props: CityProps) {
    this.id = props.id ?? crypto.randomUUID();
    this.name = props.name;
    this.state = props.state;
  }
}
