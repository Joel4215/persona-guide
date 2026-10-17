import { Component, OnInit, ChangeDetectorRef, signal} from '@angular/core';
import { CalendarService } from './calendar.service';
import { CalendarDay } from '../shared/models/calendar-name.model';
import {
  HubCalendarComponent,
  CalendarEvent,
  CalendarViewType
} from 'ng-hub-ui-calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [HubCalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  calendarDay: CalendarDay[] = []
  loading = false;
  error = '';
  chosenGame= ''; //get it from local storage
  selectedMonth = 4; //all the games start in april so hardcoding is fine, if future games change this we can adjust when intergrating


view = signal<CalendarViewType>(CalendarViewType.MONTH);
  
  events = signal<CalendarEvent[]>([
    { id: '0', title: 'Office Closed', start: this.today(), allDay: true },
    // These two overlap, so the week and day grids split the column between them.
    { id: '1', title: 'Team Meeting', start: this.today(9), end: this.today(11) },
    { id: '2', title: 'Client Call', start: this.today(10), end: this.today(12) },
    { id: '3', title: 'Lunch Break', start: this.today(13), end: this.today(14) },
    { id: '4', title: 'Project Deadline', start: this.today(0, 1), allDay: true }
  ]);

   private today(hour = 0, dayOffset = 0): Date {
    const date = new Date();
    date.setHours(hour, 0, 0, 0);
    date.setDate(date.getDate() + dayOffset);
    return date;
  }


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
