import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarTimeComponent } from './atualizar-time.component';

describe('AtualizarTimeComponent', () => {
  let component: AtualizarTimeComponent;
  let fixture: ComponentFixture<AtualizarTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
