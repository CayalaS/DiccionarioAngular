import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPalabrasComponent } from './lista-palabras.component';

describe('ListaPalabrasComponent', () => {
  let component: ListaPalabrasComponent;
  let fixture: ComponentFixture<ListaPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPalabrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
