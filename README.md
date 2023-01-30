# Trybers and Dragons Project

## Summary

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#additional-info">Additional Info</a></li>
  </ol>
</details>

## About The Project

#### Trybers and Dragons,

A demonstration of a RPG `(Role Playing Game)`:
- Playable races: `Elves`, `Orcs`, `Dwarves` and `Halflings`.
  - define some character stats, like `life points` and `dexterity`
- Archetypes: `Warrior`, `Necromancer`, `Mage` and `Ranger`


#### Character attributes:
- Each race has a `maxLifePoints`:
  - Elf: 99
  - Dwarf: 80
  - Orc: 74
  - Halfling: 60

- Depending on the archetype, players can have an energy type of either `mana` or `stamina`

- When you instantiate a new Character, you'll get the following:
  - `race`: with Elf being the standard
  - `maxLifePoints`: at lv 1, half of the maxLifePoints of the selected race
  - `lifePoints`: full life
  - `dexterity`: 1-10 (random)
  - `strength`: 1-10 (random)
  - `defense`: 1-10 (random)
  - `energy`: 1-10 (random)
  - `attack(enemy)`: the enemy type depends on whether the battle is either PVP or PVE
  - `levelUp()`: every time this method is called, the `maxLifePoints`, `strength`, `dexterity` and `defense` stats will increase their values by 1-10 (random)
  - `receiveDamage(attackPoints: number)`

#### Monsters:
- Non-playable creatures, their races are unknown.
- Have the following:
  - `lifePoints`: 85
  - `strength`: 63
  - `attack(player)`
  - `receiveDamage(attackPoints: number)`

#### Dragons:
- Non-playable, and have:
  - `lifePoints`: 999
  - `strength`: 63
  - `attack(player)`
  - `receiveDamage(attackPoints: number)`


> This is a project developed as part of my studies to help me learn about `OOP` and its `SOLID` principles.

### Built With

[![TypeScript][TypeScript.io]][TypeScript-url]

[![NodeJS][NodeJS.io]][NodeJS-url]


## Getting Started

### Installation

1. Clone the repo
```
  git clone git@github.com:biancaoura/project-trybers-and-dragons.git
```
2. Install npm packages
```
  npm install
```

## Usage

To create a new character:

```
const foo = new Character('name');
```

Since this is just a demonstration, if you go to `src/index.ts` you can play around with the `runBattles` function, like:

```
console.log(runBattles([pve, pvp]));
```

You can also change the `fight()` method in `PVP.ts` and `PVE.ts` to test different fighting strategies.
- Fights will end when either all of the enemies or the player loses all of their `lifePoints`

To check the battle results, just run
```
npm start
```


## Additional Info
- This is a project developed at Trybe
> `Battle.ts` and `utils.ts` files provided by Trybe

[TypeScript.io]: https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org
[NodeJS.io]: https://img.shields.io/badge/node.js-339933?style=flat-square&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en/
