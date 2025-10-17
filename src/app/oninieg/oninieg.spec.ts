import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oninieg } from './oninieg';

describe('Oninieg', () => {
  let component: Oninieg;
  let fixture: ComponentFixture<Oninieg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oninieg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oninieg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
