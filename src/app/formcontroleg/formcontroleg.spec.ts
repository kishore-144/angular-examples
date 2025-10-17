import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcontroleg } from './formcontroleg';

describe('Formcontroleg', () => {
  let component: Formcontroleg;
  let fixture: ComponentFixture<Formcontroleg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formcontroleg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formcontroleg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
