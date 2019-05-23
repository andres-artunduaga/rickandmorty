import { Component, OnInit } from '@angular/core';
import { RymService } from '../rym.service';
import { Character } from '../types/character.type';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public characters:Array<Character> = [];

  constructor( private service:RymService ) { }

  ngOnInit() {
    this.service.getCharacters().subscribe( ( characters ) => {
      characters.forEach( x => console.log( "before ", x.lastEpisode, " name ", x.name  ) );

      this.characters = characters.sort( (a , b) => {
        if ( a['lastEpisode'] < b['lastEpisode'] ){
          return 1;
        }
        if ( a['lastEpisode'] > b['lastEpisode'] ){
          return -1;
        }
        return 0;
      });

      this.characters.forEach( x => console.log( "after ", x.lastEpisode, " name ", x.name ) );

    });



  }

}
