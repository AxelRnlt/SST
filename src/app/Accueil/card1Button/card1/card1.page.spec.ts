import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { card1Page } from './card1.page';

describe('card1Page', () => {
  let component: card1Page;
  let fixture: ComponentFixture<card1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ card1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(card1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
