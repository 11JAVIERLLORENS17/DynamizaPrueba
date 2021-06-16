import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarnominaComponent } from './borrarnomina.component';

describe('BorrarnominaComponent', () => {
  let component: BorrarnominaComponent;
  let fixture: ComponentFixture<BorrarnominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarnominaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarnominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
