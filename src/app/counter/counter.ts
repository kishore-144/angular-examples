import { Component, signal,Signal, computed, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter:WritableSignal<number>=signal(0);
  doublecounter:Signal<number>=computed(() => this.counter()*2);
  clickedMe() {
    this.counter.update(value => value + 1);
  }
  decrease() {
    if (this.counter() < 1) {
      this.counter.set(0);
    }
    else {
      this.counter.update(value => value - 1);
    }
  }
}
