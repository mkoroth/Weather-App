
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class PokemonService {
  private url = "https://super-crud.herokuapp.com/pokemon";
  public pokemons: any = [
    {
      name: 'Pokemon1'
    },
    {
      name: 'Pokemon2'
    }
  ]

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<any> {
    return this.pokemons;
    //return this.http.get<any>(this.url);
  }
}




