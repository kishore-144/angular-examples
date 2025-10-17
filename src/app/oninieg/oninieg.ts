import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oninieg',
  imports: [CommonModule],
  templateUrl: './oninieg.html',
  styleUrl: './oninieg.css'
})
export class Oninieg implements OnInit {
  message: string = "";
  ngOnInit():void {
    this.message = "On init works when the component is initialized. (like useEffect in react)";
  }
}
