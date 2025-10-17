import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docheckeg } from './docheckeg';

describe('Docheckeg', () => {
  let component: Docheckeg;
  let fixture: ComponentFixture<Docheckeg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Docheckeg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Docheckeg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
