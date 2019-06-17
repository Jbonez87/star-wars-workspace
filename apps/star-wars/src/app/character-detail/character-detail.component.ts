import { Component, OnInit } from '@angular/core';
import {Character} from '../character';

@Component({
  selector: 'star-wars-workspace-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: Character = {
    name: 'Luke Skywalker',
    url: 'https://swapi.co/api/people/1/'
  };

  constructor() { }

  ngOnInit() {
  }

}
