import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShablonComponent } from './shablon.component';

describe('ShablonComponent', () => {
  let component: ShablonComponent;
  let fixture: ComponentFixture<ShablonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShablonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShablonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
