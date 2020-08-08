import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';

const allCharacters = [Bowman, Swordsman, Magician, Daemon, Undead, Vampire];
const userTeam = [Bowman, Swordsman, Magician];
const userTeamLevel1 = [Bowman, Swordsman];
const enemyTeam = [Daemon, Undead, Vampire];

class Team {
  constructor() {
    this.allCharacters = allCharacters;
    this.userTeam = userTeam;
    this.userTeamLevel1 = userTeamLevel1;
    this.enemyTeam = enemyTeam;
  }
}

const newTeam = new Team();
export default newTeam;
