import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' },
    { name: 'Yoda', side: 'light' }
  ];

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter(char => {
      return char.side === chosenList;
    });
  }

  onSideAssigned(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex(char => char.name === name);
    if (pos !== -1) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}