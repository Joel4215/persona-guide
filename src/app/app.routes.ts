import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { GameSelectCompnent } from './game-select/game-select.component';

export const routes: Routes = [
      { path: '', component: GameSelectCompnent },  
      { path: 'calendar', component: CalendarComponent },  
];
