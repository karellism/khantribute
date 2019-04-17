import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhantributeComponent } from './khantribute.component';

describe('KhantributeComponent', () => {
  let component: KhantributeComponent;
  let fixture: ComponentFixture<KhantributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhantributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhantributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
