import Race from './Race';

export default class Dwarf extends Race {
  private static _createdInstances = 0;
  
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf._createdInstances += 1;
  }

  public static createdRacesInstances(): number {
    return this._createdInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
