import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgGeneratePOComponent } from './fg-generate-po.component';

describe('FgGeneratePOComponent', () => {
  let component: FgGeneratePOComponent;
  let fixture: ComponentFixture<FgGeneratePOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgGeneratePOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgGeneratePOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
