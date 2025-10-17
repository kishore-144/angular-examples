import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ondestroyeg } from './ondestroyeg';

describe('Ondestroyeg', () => {
  let component: Ondestroyeg;
  let fixture: ComponentFixture<Ondestroyeg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ondestroyeg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ondestroyeg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
