import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraisesComponent } from './praises.component';

describe('PraisesComponent', () => {
  let component: PraisesComponent;
  let fixture: ComponentFixture<PraisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
