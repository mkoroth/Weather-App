import { Component } from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
})

export class FavoriteComponent {
  public favorites = [];

  public addFavorite(favorite) {
    this.favorites.push(favorite);
  }
}
