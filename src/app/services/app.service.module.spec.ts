import { TestBed } from '@angular/core/testing';
import { AppServiceModule } from './app.service.module';
describe('AppServiceModule', () => {
  let pipe: AppServiceModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AppServiceModule] });
    pipe = TestBed.get(AppServiceModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
