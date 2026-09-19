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

  constructor(private calendarService: CalendarService, private cd: ChangeDetectorRef) {}

  async ngOnInit() {
    await this.loadDays();
  }

  async loadDays() {
    this.loading = true;
    this.error = '';

    try {
      this.calendarDay = await this.calendarService.getDays();
      console.log(this.calendarDay.length)
      console.log('Calendar days:', this.calendarDay);
    } catch (err) {
      console.error('Error loading calendar:', err);
      this.error = 'Unable to load calendar days.';
    } finally {
      this.loading = false;
      this.cd.detectChanges();
    }
  }
}
