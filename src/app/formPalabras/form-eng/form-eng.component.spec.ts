import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEngComponent } from './form-eng.component';

describe('FormEngComponent', () => {
  let component: FormEngComponent;
  let fixture: ComponentFixture<FormEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
