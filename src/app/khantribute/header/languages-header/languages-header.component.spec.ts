import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesHeaderComponent } from './languages-header.component';

describe('LanguagesHeaderComponent', () => {
  let component: LanguagesHeaderComponent;
  let fixture: ComponentFixture<LanguagesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
