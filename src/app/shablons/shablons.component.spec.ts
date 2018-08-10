import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShablonsComponent } from './shablons.component';

describe('ShablonsComponent', () => {
  let component: ShablonsComponent;
  let fixture: ComponentFixture<ShablonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShablonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShablonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
