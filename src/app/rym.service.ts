import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './types/character.type';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RymService {

  private baseUrl:string = "https://rickandmortyapi.com/api";

  constructor( public http:HttpClient ) {

  }


  public getCharacters(): Observable<Array<Character>> {
    let url = this.baseUrl + "/character";
    return this.http.get(url).pipe(map(
      (response) => {
        console.log("response", response);
        return Character.importBatch(response['results']);
      }
    )
    );
  }



}
