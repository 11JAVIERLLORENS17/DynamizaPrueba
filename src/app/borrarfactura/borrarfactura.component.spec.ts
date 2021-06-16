import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarfacturaComponent } from './borrarfactura.component';

describe('BorrarfacturaComponent', () => {
  let component: BorrarfacturaComponent;
  let fixture: ComponentFixture<BorrarfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarfacturaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
