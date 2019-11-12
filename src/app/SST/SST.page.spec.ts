import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSTPage } from './SST.page';

describe('SSTPage', () => {
  let component: SSTPage;
  let fixture: ComponentFixture<SSTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SSTPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
