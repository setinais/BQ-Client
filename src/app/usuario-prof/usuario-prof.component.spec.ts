import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioProfComponent } from './usuario-prof.component';

describe('UsuarioProfComponent', () => {
  let component: UsuarioProfComponent;
  let fixture: ComponentFixture<UsuarioProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
