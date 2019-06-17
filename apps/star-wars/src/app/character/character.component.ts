import { Component, OnInit } from '@angular/core';
import data from '../../assets/characters.json';

interface Character {
  name: string;
  url: string;
}

@Component({
  selector: 'star-wars-workspace-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = data.characters;
  characterSelected = 'Click any of the characters below';

  onClick(e) {
    this.characterSelected = `You\'ve chosen ${e.target.innerHTML}`;
  }
  constructor() { }

  ngOnInit() {
    console.log(this.characters);
  }

}
