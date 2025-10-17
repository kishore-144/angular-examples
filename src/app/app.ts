import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Movies } from './movies/movies';
import { Dynamic } from './dynamic/dynamic';
import { Customedemo } from './customedemo/customedemo';
import { Pipedemos } from './pipedemos/pipedemos';
import { Form } from './form/form';
import { List } from './list/list';
import { Form2 } from './form2/form2';
import { List2 } from './list2/list2';
import { NgHooks } from './ng-hooks/ng-hooks';
import { FormsModule } from '@angular/forms';
import { Oninieg } from './oninieg/oninieg';
import { Docheckeg } from './docheckeg/docheckeg';
import { Aftercontenteg } from './aftercontenteg/aftercontenteg';
import { Aftervieweg } from './aftervieweg/aftervieweg';
import { Ondestroyeg } from './ondestroyeg/ondestroyeg';
import { Post } from './post/post';
import { Formcontroleg } from './formcontroleg/formcontroleg';
import { Naver } from './naver/naver';

@Component({
  selector: 'app-root',
  imports: [Naver,FormsModule,RouterOutlet,Counter,Movies,Dynamic,Customedemo,Pipedemos,Form,List,Form2,List2,NgHooks,FormsModule,Oninieg,Docheckeg,Aftercontenteg,Aftervieweg,Ondestroyeg,Post,Formcontroleg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="Hello!";
  carNames: string[] = [];
  itemList = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Banana'},
    {id: 3, name: 'Orange'},
    {id: 4, name: 'Grapes'},
    {id: 5, name: 'Jackfruit'}
  ]
  onCarAdded(carName: string) {
    this.carNames.push(carName);
  }
  showOnDestroyeg = signal(false);
}
