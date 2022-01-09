import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBuscaComponent } from './lista-busca.component';

describe('ListaBuscaComponent', () => {
  let component: ListaBuscaComponent;
  let fixture: ComponentFixture<ListaBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
