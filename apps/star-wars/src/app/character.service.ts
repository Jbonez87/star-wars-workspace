import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../assets/characters.json';
import { Character } from './character';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(): Observable<Character[]> {
    return of(data.characters);
  }

  getCharacter(name: string): Observable<Character> {
    return of(data.characters.find(character => character.name === name));
  }
}
