import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus implements OnInit {
  id!: string;
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.id=this.router.snapshot.paramMap.get('id')!;
  }
}
