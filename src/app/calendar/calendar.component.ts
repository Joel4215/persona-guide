import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarService } from './calendar.service';
import { CalendarDay } from '../shared/models/calendar-name.model';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  calendarDay: CalendarDay[] = []
  loading = false;
  error = '';
  chosenGame= ''; //get it from local storage
  selectedMonth = 4; //all the games start in april so hardcoding is fine, if future games change this we can adjust when intergrating

  constructor(private calendarService: CalendarService, private cd: ChangeDetectorRef) {}

  async ngOnInit() {

    this.chosenGame = localStorage.getItem('selectedGame') ?? '';

    await this.loadDays(this.chosenGame, this.selectedMonth);
  }

  async loadDays(chosenGame: string, selectedMonth: number) { //takes the game chosen and the month chosen and gets all the days in that month from that game
    this.loading = true;
    this.error = '';

    try {
      this.calendarDay = await this.calendarService.getDays(chosenGame, selectedMonth);
      console.log(this.calendarDay)
    } catch (err) {
      console.error('Error loading calendar:', err);
      this.error = 'Unable to load calendar days.';
    } finally {
      this.loading = false;
      this.cd.detectChanges();
    }
  }

}
