import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { MessageService } from '../message.service';

@Component({
  selector: 'star-wars-workspace-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[];

  constructor(
    private characterService: CharacterService,
    private messageService: MessageService
  ) { }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  clearErrors(): void {
    this.messageService.clear()
  }

  ngOnInit() {
    this.getCharacters();
  }

}
