import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarfacturaComponent } from './modificarfactura.component';

describe('ModificarfacturaComponent', () => {
  let component: ModificarfacturaComponent;
  let fixture: ComponentFixture<ModificarfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarfacturaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
