import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form2.html',
  styleUrl: './form2.css'
})
export class Form2 {
carName2: string = "";
  //@Output() carAdded2= new EventEmitter<string>();
  ans: string = "";
  constructor(private carService:Car) {
    
  }
  onSubmit() {
    if(this.carName2.trim().length==0){
      alert('Please enter a valid name');
      return;
    }
    this.carService.addCarName(this.carName2);
    this.carName2 = "";
  }
}
