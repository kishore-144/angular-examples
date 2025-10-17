import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
    movies: Array<string> = [
      'Zootopia',
      'Batman vs Superman',
      'Harry Potter',
      'X-men',
      'Final Destination'
    ]
    
}
