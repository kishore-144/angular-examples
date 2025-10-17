import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-ng-hooks',
  imports: [CommonModule],
  templateUrl: './ng-hooks.html',
  styleUrl: './ng-hooks.css'
})
export class NgHooks implements OnChanges {
  @Input() items: Item[] = [];
  @Input() title: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      console.log('Items input has changed:', changes['items'].currentValue);
    }
    if (changes['title']) {
      console.log('Title input has changed:', changes['title'].currentValue);
    }
  }
}
