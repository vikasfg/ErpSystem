import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgCreateBomComponent } from './fg-create-bom.component';

describe('FgCreateBomComponent', () => {
  let component: FgCreateBomComponent;
  let fixture: ComponentFixture<FgCreateBomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgCreateBomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgCreateBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
