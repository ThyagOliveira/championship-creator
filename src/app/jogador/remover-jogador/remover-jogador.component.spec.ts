import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverJogadorComponent } from './remover-jogador.component';

describe('RemoverJogadorComponent', () => {
  let component: RemoverJogadorComponent;
  let fixture: ComponentFixture<RemoverJogadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverJogadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
