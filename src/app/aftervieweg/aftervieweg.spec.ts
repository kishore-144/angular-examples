import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aftervieweg } from './aftervieweg';

describe('Aftervieweg', () => {
  let component: Aftervieweg;
  let fixture: ComponentFixture<Aftervieweg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aftervieweg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aftervieweg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
