import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customedemo } from './customedemo';

describe('Customedemo', () => {
  let component: Customedemo;
  let fixture: ComponentFixture<Customedemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customedemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customedemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
