import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdInstances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger._createdInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._createdInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}