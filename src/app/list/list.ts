import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  @Input() carNames: string[]=[];
}
