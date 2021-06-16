import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevanominaComponent } from './nuevanomina.component';

describe('NuevanominaComponent', () => {
  let component: NuevanominaComponent;
  let fixture: ComponentFixture<NuevanominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevanominaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevanominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
