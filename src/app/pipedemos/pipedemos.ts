import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemos',
  imports: [CommonModule],
  templateUrl: './pipedemos.html',
  styleUrl: './pipedemos.css'
})
export class Pipedemos {
    todate: Date = new Date();
    stringger: string = "Kishore uh";
}
