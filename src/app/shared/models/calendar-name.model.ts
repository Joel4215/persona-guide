// user.model.ts
export interface CalendarDay {
  id: string;
  day: number;
  month: number;
  day_of_week: string;
  notes: string[];
  game: number;
}
