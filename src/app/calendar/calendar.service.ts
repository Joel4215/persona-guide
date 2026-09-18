import { Injectable } from '@angular/core';
import { supabase } from '../shared/supabase';

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

    return data;
  }
}
