import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aftercontenteg } from './aftercontenteg';

describe('Aftercontenteg', () => {
  let component: Aftercontenteg;
  let fixture: ComponentFixture<Aftercontenteg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aftercontenteg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aftercontenteg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
