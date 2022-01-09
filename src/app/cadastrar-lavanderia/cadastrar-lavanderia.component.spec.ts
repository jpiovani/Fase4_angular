import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLavanderiaComponent } from './cadastrar-lavanderia.component';

describe('CadastrarLavanderiaComponent', () => {
  let component: CadastrarLavanderiaComponent;
  let fixture: ComponentFixture<CadastrarLavanderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarLavanderiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLavanderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
