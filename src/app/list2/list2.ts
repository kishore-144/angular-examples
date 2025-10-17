import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-list2',
  imports: [CommonModule,FormsModule],
  templateUrl: './list2.html',
  styleUrl: './list2.css'
})
export class List2 implements OnInit {
  carNames2: string[]=[];
  constructor(private carService:Car) { }
  ngOnInit():void{
    this.carService.carNames$.subscribe(names=>{
      this.carNames2=names;
    });
  }
}
