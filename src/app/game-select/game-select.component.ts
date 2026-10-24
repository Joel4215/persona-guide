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
      stringYear = ''


    async gameSelected(chosenGame: string, startYear: number){
     this.stringYear = String(startYear)

        localStorage.setItem('selectedGame', chosenGame);
        localStorage.setItem('gameYear', this.stringYear)

        this.router.navigate(['/calendar'])

    }
}