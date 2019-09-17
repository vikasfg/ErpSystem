import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgCreateMaterialComponent } from './fg-create-material.component';

describe('FgCreateMaterialComponent', () => {
  let component: FgCreateMaterialComponent;
  let fixture: ComponentFixture<FgCreateMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgCreateMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgCreateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
