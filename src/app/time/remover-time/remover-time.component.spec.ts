import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverTimeComponent } from './remover-time.component';

describe('RemoverTimeComponent', () => {
  let component: RemoverTimeComponent;
  let fixture: ComponentFixture<RemoverTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
