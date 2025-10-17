import { Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-docheckeg',
  imports: [FormsModule],
  templateUrl: './docheckeg.html',
  styleUrl: './docheckeg.css'
})
export class Docheckeg implements DoCheck {
  sentence: string = "This is DoCheck example";
  counting: number = -2;
  ngDoCheck(): void {
    this.counting++;
  }
}
