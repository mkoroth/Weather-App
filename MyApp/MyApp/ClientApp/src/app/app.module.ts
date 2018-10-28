import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PokemonListComponent } from './PokemonListComponent/pokemon-list.component';
import { PokemonService } from './PokemonListComponent/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SidebarComponent,
    FavoriteComponent,
    PokemonListComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'sidebar', component: SidebarComponent },
      { path: 'favorite', component: FavoriteComponent }

    ])
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }



