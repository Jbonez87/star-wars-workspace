import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from '../character.service';
import { Character } from '../character';
import { Movie } from '../movie';

@Component({
  selector: 'star-wars-workspace-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
  url: string;
  movies: Movie[];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCharacter();
    this.url = this.character.url;
    console.log(this.url);
  }

  getCharacter():void {
    const name = this.route.snapshot.paramMap.get('name');
    this.characterService.getCharacter(name)
      .subscribe(character => this.character = character);
  }

  getMovies() {

  }

  goBack(): void {
    this.location.back();
  }

}
