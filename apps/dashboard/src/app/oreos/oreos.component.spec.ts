import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OreosComponent } from './oreos.component';

describe('OreosComponent', () => {
  let component: OreosComponent;
  let fixture: ComponentFixture<OreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
