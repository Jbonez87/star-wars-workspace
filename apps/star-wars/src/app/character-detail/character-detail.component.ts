import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from '../character.service';
import { MoviesService } from '../movies.service';
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
  movieList: [];
  movies = [];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private moviesService: MoviesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCharacter();
    this.getMovies(this.character.url);
  }

  getCharacter():void {
    const name = this.route.snapshot.paramMap.get('name');
    this.characterService.getCharacter(name)
      .subscribe(character => this.character = character);
  }

  getMovies(url: string) {
    this.moviesService.getMovies(url)
    .subscribe(charData => {
      this.movieList = charData.films;
// tslint:disable-next-line: no-shadowed-variable
      for(const url of this.movieList) {
        this.moviesService.getMovies(url)
        .subscribe(movie => {
          this.movies.push(movie);
        })
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
