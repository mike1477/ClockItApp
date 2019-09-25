import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOneComponent } from './column-one.component';

describe('ColumnOneComponent', () => {
  let component: ColumnOneComponent;
  let fixture: ComponentFixture<ColumnOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
