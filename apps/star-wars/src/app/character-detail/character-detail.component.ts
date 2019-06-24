import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from '../character.service';
import { MoviesService } from '../movies.service';
import { Character } from '../character';

@Component({
  selector: 'star-wars-workspace-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
  url: string;
  movieUrls: [];
  movies = [];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private moviesService: MoviesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter():void {
    const name = this.route.snapshot.paramMap.get('name');
    this.characterService.getCharacter(name)
      .subscribe(character => {
        this.character = character;
        this.getMovies(this.character.url);
      });
  }

  getMovies(url: string) {
    this.moviesService.getMovies(url)
    .subscribe((charData: any) => {
      this.movieUrls = charData.films;
      // tslint:disable-next-line: no-shadowed-variable
      for (const url of this.movieUrls) {
        this.moviesService.getMovies(url)
          .subscribe(movie => {
            this.movies.push(movie);
          })
      }
    });
  }

  formatMovieDate(date: string) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = new Date(date).toLocaleDateString('en-us', options);
    return formattedDate;
  }

  goBack(): void {
    this.location.back();
  }

}
