import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgCreateVendorComponent } from './fg-create-vendor.component';

describe('FgCreateVendorComponent', () => {
  let component: FgCreateVendorComponent;
  let fixture: ComponentFixture<FgCreateVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgCreateVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgCreateVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
