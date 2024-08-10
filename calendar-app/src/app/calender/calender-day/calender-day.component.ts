import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-calender-day',
  standalone: true,
  imports: [MatGridListModule,CommonModule],
  templateUrl: './calender-day.component.html',
  styleUrl: './calender-day.component.css'
})
export class CalenderDayComponent  {
  @Input() day: any;
  currentDate: Date = new Date();

}
