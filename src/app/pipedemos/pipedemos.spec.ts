import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipedemos } from './pipedemos';

describe('Pipedemos', () => {
  let component: Pipedemos;
  let fixture: ComponentFixture<Pipedemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipedemos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipedemos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
