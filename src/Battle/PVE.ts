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
      while (this._player.lifePoints > 0
        && enemy.lifePoints > 0) {
        this._player.attack(enemy); 
        enemy.attack(this._player);
      }
    });

    return super.fight();
  }
}