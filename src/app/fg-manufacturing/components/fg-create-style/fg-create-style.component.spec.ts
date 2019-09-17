import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgCreateStyleComponent } from './fg-create-style.component';

describe('FgCreateStyleComponent', () => {
  let component: FgCreateStyleComponent;
  let fixture: ComponentFixture<FgCreateStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgCreateStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgCreateStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
