import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargumentsComponent } from './marguments.component';

describe('MargumentsComponent', () => {
  let component: MargumentsComponent;
  let fixture: ComponentFixture<MargumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MargumentsComponent]
    });
    fixture = TestBed.createComponent(MargumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
