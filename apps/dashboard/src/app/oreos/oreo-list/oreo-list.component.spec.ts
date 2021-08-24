import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OreoListComponent } from './oreo-list.component';

describe('OreoListComponent', () => {
  let component: OreoListComponent;
  let fixture: ComponentFixture<OreoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OreoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OreoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
