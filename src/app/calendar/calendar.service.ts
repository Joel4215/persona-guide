import { Injectable } from '@angular/core';
import { CalendarDay } from '../shared/models/calendar-name.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

   constructor(private http: HttpClient) {}

  // async getDays(gameId: number, selectedMonth: number) {
  //   const { data, error } = await supabase
  //     .from('calendar_days')
  //     .select('*')
  //     .eq('game_id', gameId)
  //     .eq('month', selectedMonth);

  //   if (error) {
  //     console.error('Error getting calendar days:', error);
  //     return [];
  //   }

  //   return data as CalendarDay[];
  // }

  async getDays(chosenGame: string, selectedMonth: number){

    return firstValueFrom(

      this.http.get<CalendarDay[]>(`data/${chosenGame}/calendar-days.json`).pipe(
      map(days => days.filter(day => day.month === selectedMonth))
      )
    )
  }
}
