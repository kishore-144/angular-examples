import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ondestroyeg',
  imports: [],
  templateUrl: './ondestroyeg.html',
  styleUrl: './ondestroyeg.css'
})
export class Ondestroyeg implements OnInit, OnDestroy{
  destcount = 0;
  intervalId:any;
  ngOnInit(): void {
    this.intervalId=setInterval(() => {
      this.destcount++;
    }, 100);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
