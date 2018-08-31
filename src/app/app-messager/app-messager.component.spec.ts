import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMessagerComponent } from './app-messager.component';

describe('AppMessagerComponent', () => {
  let component: AppMessagerComponent;
  let fixture: ComponentFixture<AppMessagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMessagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMessagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
