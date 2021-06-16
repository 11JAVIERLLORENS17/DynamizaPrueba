import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnominaComponent } from './modificarnomina.component';

describe('ModificarnominaComponent', () => {
  let component: ModificarnominaComponent;
  let fixture: ComponentFixture<ModificarnominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarnominaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
