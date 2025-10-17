import { AfterViewInit, Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aftervieweg',
  imports: [FormsModule],
  templateUrl: './aftervieweg.html',
  styleUrl: './aftervieweg.css'
})
export class Aftervieweg implements AfterViewInit {
  @ViewChild("nameInput") nameInput!:ElementRef;
  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
  }
}
