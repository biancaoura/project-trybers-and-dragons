import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdInstances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage._createdInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._createdInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}