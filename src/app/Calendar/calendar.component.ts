import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  days: any[] = [];
  loading = false;
  error = '';

  constructor(private calendarService: CalendarService) {}

  async ngOnInit() {
    await this.loadDays();
  }

  async loadDays() {
    this.loading = true;
    this.error = '';

    try {
      this.days = await this.calendarService.getDays();
      console.log('Calendar days:', this.days);
    } catch (err) {
      console.error('Error loading calendar:', err);
      this.error = 'Unable to load calendar days.';
    } finally {
      this.loading = false;
    }
  }
}
