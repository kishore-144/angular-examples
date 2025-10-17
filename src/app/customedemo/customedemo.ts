import { Component } from '@angular/core';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-customedemo',
  imports: [Highlight],
  templateUrl: './customedemo.html',
  styleUrl: './customedemo.css'
})
export class Customedemo {
  wordd:string="This is custom element demo";
}
