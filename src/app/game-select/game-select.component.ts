import { Component, inject } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-game-select',
  standalone: true,
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.sass']
})

export class GameSelectCompnent {
      private router = inject(Router);


    async gameSelected(gameId: number){

        localStorage.setItem('selectedGameId', gameId.toString());

        this.router.navigate(['/calendar'])

    }
}