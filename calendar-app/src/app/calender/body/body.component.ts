import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalenderDayComponent } from '../calender-day/calender-day.component';

@Component({
  selector: 'app-calender-body',
  standalone: true,
  imports: [MatGridListModule,CommonModule,CalenderDayComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  
})
export class BodyComponent implements OnInit{
  @Input()   
  calendarData!: any[]; 
  currentDate: Date = new Date();

  iscurrentDate!:boolean
  ngOnInit(): void {
     
    
    
  }
}
