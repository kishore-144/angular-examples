import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHooks } from './ng-hooks';

describe('NgHooks', () => {
  let component: NgHooks;
  let fixture: ComponentFixture<NgHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgHooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgHooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
