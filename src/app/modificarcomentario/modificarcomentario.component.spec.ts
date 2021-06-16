import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcomentarioComponent } from './modificarcomentario.component';

describe('ModificarcomentarioComponent', () => {
  let component: ModificarcomentarioComponent;
  let fixture: ComponentFixture<ModificarcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarcomentarioComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
