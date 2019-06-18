import { Component, OnInit } from '@angular/core';
import data from '../../assets/characters.json';
import { Character } from '../character';

@Component({
  selector: 'star-wars-workspace-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = data.characters;
  characterSelected:Character;

  onSelect(character: Character):void {
    this.characterSelected = character;
  }
  constructor() { }

  ngOnInit() {
  }

}
