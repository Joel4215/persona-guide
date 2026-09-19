import { inject, Injectable } from '@angular/core';
import { supabase } from '../shared/supabase';
import { CalendarDay } from '../shared/models/calendar-name.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  async getDays() {
    const { data, error } = await supabase
      .from('calendar_days')
      .select('*');

    if (error) {
      console.error('Error getting calendar days:', error);
      return [];
    }

    return data as CalendarDay[];
  }
}
