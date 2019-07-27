import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionSheetPage } from './accion-sheet.page';

describe('AccionSheetPage', () => {
  let component: AccionSheetPage;
  let fixture: ComponentFixture<AccionSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionSheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
