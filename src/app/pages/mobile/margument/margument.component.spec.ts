import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargumentComponent } from './margument.component';

describe('MargumentComponent', () => {
  let component: MargumentComponent;
  let fixture: ComponentFixture<MargumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MargumentComponent]
    });
    fixture = TestBed.createComponent(MargumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
