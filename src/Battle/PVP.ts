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
    if (this._playerA.lifePoints !== -1 
      || this._playerB.lifePoints !== 1) {
      this._playerA.attack(this._playerB);
      this._playerB.attack(this._playerA);
    }
    
    return super.fight();
  }
}