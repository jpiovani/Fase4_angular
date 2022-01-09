import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLavanderiaComponent } from './lista-lavanderia.component';

describe('ListaLavanderiaComponent', () => {
  let component: ListaLavanderiaComponent;
  let fixture: ComponentFixture<ListaLavanderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLavanderiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLavanderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
