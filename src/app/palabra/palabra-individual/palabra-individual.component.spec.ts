import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraIndividualComponent } from './palabra-individual.component';

describe('PalabraIndividualComponent', () => {
  let component: PalabraIndividualComponent;
  let fixture: ComponentFixture<PalabraIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalabraIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabraIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
