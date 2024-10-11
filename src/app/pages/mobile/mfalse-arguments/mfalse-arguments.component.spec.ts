import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfalseArgumentsComponent } from './mfalse-arguments.component';

describe('MfalseArgumentsComponent', () => {
  let component: MfalseArgumentsComponent;
  let fixture: ComponentFixture<MfalseArgumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfalseArgumentsComponent]
    });
    fixture = TestBed.createComponent(MfalseArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
