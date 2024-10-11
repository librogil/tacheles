import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdictionaryComponent } from './mdictionary.component';

describe('MdictionaryComponent', () => {
  let component: MdictionaryComponent;
  let fixture: ComponentFixture<MdictionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdictionaryComponent]
    });
    fixture = TestBed.createComponent(MdictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
