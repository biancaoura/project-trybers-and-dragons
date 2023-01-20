import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {  
  constructor(
    private _playerA: Fighter,
    private _playerB: Fighter,
  ) {
    super(_playerA);
  }

  public fight(): number {
    while (this._playerA.lifePoints > 0 
      && this._playerB.lifePoints > 0) {
      this._playerA.attack(this._playerB);
      this._playerB.attack(this._playerA);
    }
    
    return super.fight();
  }
}