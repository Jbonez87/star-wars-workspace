import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../assets/characters.json';
import { Character } from './character';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private messageService: MessageService) { }

  getCharacters(): Observable<Character[]> {
    // TODO: send the message _after_ fetching the characters
    this.messageService.add('CharacterService: fetched characters');
    return of(data.characters);
  }

  getCharacter(name: string): Observable<Character> {
    this.messageService.add(`CharacterService: fetched character name=${name}`);
    return of(data.characters.find(character => character.name === name));
  }
}
