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


    async gameSelected(chosenGame: string){

        localStorage.setItem('selectedGame', chosenGame);

        this.router.navigate(['/calendar'])

    }
}