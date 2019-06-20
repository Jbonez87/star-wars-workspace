import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
// import data from '../../assets/characters.json';
import { Character } from '../character';

@Component({
  selector: 'star-wars-workspace-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[];
  // characterSelected:Character;

  constructor(private characterService: CharacterService) { }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  // onSelect(character: Character):void {
  //   this.characterSelected = character;
  // }

  ngOnInit() {
    this.getCharacters();
  }

}
