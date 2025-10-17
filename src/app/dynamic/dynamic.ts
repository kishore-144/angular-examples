import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  imports: [CommonModule,FormsModule],
  templateUrl: './dynamic.html',
  styleUrl: './dynamic.css'
})
export class Dynamic {
    reder:boolean=false;
    biger:boolean=false;
}
