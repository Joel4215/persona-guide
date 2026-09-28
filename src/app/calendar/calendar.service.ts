import { Injectable } from '@angular/core';
import { supabase } from '../shared/supabase';
import { CalendarDay } from '../shared/models/calendar-name.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  async getDays(gameId: number, selectedMonth: number) {
    const { data, error } = await supabase
      .from('calendar_days')
      .select('*')
      .eq('game_id', gameId)
      .eq('month', selectedMonth);

    if (error) {
      console.error('Error getting calendar days:', error);
      return [];
    }

    return data as CalendarDay[];
  }
}
