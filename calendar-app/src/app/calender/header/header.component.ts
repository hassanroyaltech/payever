import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calender-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() currentDate!: Date;
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
}


 