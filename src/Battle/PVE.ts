import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monsters: SimpleFighter[] | Fighter[],
  ) {
    super(_player);
  }

  public fight(): number {
    this._monsters.forEach((enemy) => {
      if (this._player.lifePoints !== -1
        || enemy.lifePoints !== -1) {
        this._player.attack(enemy); 
        enemy.attack(this._player);
      }
    });

    return super.fight();
  }
}