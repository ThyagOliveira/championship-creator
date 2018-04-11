import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarJogadorComponent } from './atualizar-jogador.component';

describe('AtualizarJogadorComponent', () => {
  let component: AtualizarJogadorComponent;
  let fixture: ComponentFixture<AtualizarJogadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarJogadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
