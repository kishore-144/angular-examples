import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-naver',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './naver.html',
  styleUrl: './naver.css'
})
export class Naver {
  constructor(private router: Router) {}
  onClicked() {
    this.router.navigate(['/contact']);
  }
}
