import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List2 } from './list2';

describe('List2', () => {
  let component: List2;
  let fixture: ComponentFixture<List2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
