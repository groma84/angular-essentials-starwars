import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' },
    { name: 'Yoda', side: 'light' }
  ];
  chosenList = 'all';

  constructor() {}

  ngOnInit() {}

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter(char => {
      return char.side === this.chosenList;
    });
  }

  onChoose(newList) {
    this.chosenList = newList;
  }

  onSideAssigned(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
  }
}
