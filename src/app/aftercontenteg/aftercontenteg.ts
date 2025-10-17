import { AfterContentInit, Component, ContentChildren, contentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-aftercontenteg',
  imports: [],
  templateUrl: './aftercontenteg.html',
  styleUrl: './aftercontenteg.css'
})
export class Aftercontenteg implements AfterContentInit{
  @ContentChildren('messageContent') messageElement!:QueryList<ElementRef>;
  ngAfterContentInit(): void {
    this.messageElement.forEach((item)=>{
      console.log(item.nativeElement.textContent);
      item.nativeElement.style.color='red';
      item.nativeElement.style.fontWeight='bold';
    });
  }
}
