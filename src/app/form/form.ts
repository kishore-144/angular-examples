import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  carName: string = "";
  @Output() carAdded= new EventEmitter<string>();
  ans: string = "";

  onSubmit() {
    if(this.carName.trim().length==0){
      alert('Please enter a valid name');
      return;
    }
    this.ans = `${this.carName}, added!`;
    this.carAdded.emit(this.carName);
    this.carName = "";
  }
}
