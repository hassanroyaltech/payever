import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
interface Day {
  date: Date;
  isCurrentMonth: boolean;
}
@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,BodyComponent,HeaderComponent,CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css',
  providers: [provideNativeDateAdapter()],

})
export class CalendarComponent implements OnInit   
 {
  currentDate: Date = new Date();
  calendarData: Day[] = [];

  ngOnInit(): void {
    this.generateCalendarData();
  }

  previousMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.generateCalendarData();
  }

  nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.generateCalendarData();
  }

  generateCalendarData(): void {
    const startDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();  
    const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();

    this.calendarData = [];
    for (let i = 0; i < startDay; i++) {
      const prevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
      prevMonth.setDate(prevMonth.getDate() + i);
      this.calendarData.push({ date: prevMonth, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarData.push({ date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i), isCurrentMonth: true });
    }

    const remainingDays = 42 - this.calendarData.length; 
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, i);
      this.calendarData.push({ date: nextMonth, isCurrentMonth: false });
    }
  }
}