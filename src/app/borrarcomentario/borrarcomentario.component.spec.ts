import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarcomentarioComponent } from './borrarcomentario.component';

describe('BorrarcomentarioComponent', () => {
  let component: BorrarcomentarioComponent;
  let fixture: ComponentFixture<BorrarcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarcomentarioComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
