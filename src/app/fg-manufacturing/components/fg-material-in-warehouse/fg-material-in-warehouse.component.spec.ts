import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgMaterialInWarehouseComponent } from './fg-material-in-warehouse.component';

describe('FgMaterialInWarehouseComponent', () => {
  let component: FgMaterialInWarehouseComponent;
  let fixture: ComponentFixture<FgMaterialInWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgMaterialInWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgMaterialInWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
