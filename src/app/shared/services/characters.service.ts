import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, pluck} from "rxjs";
import {Character} from "../models/character.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Character[]>{
    const url = [
      environment.baseUrl,
      'character'
    ].join('');

    return this.http.get<Character[]>(url).pipe(pluck('results')) as Observable<Character[]>;
  }

  getCharacter(id: number): Observable<Character> {
    const url = [
      environment.baseUrl,
      'character/',
      id
    ].join('');

    return this.http.get<Character>(url) as Observable<Character>;

  }

}
