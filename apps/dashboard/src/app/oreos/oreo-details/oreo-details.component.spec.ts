import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OreoDetailsComponent } from './oreo-details.component';

describe('OreoDetailsComponent', () => {
  let component: OreoDetailsComponent;
  let fixture: ComponentFixture<OreoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OreoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OreoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
