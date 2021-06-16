import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarempleadoComponent } from './borrarempleado.component';

describe('BorrarempleadoComponent', () => {
  let component: BorrarempleadoComponent;
  let fixture: ComponentFixture<BorrarempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarempleadoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
