import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' },
    { name: 'Yoda', side: 'light' }
  ];
  charactersChanged = new Subject<void>();
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get('https://swapi.co/api/people/')
      .map(data => {
        return data['results'].map(char => {
          return { name: char.name, side: '' };
        });
      })
      .subscribe(characters => {
        this.characters = characters;
        this.charactersChanged.next();
      });
  }

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
    this.charactersChanged.next();
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
