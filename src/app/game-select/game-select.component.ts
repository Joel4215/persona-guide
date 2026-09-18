import { Component, inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-game-select',
  standalone: true,
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.sass']
})

export class GameSelectCompnent {
      private router = inject(Router);

    gameSelected(){
        this.router.navigate(['/calendar'])
    }
}