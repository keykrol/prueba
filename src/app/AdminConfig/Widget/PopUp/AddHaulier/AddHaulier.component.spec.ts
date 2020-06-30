* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddHaulierComponent } from './AddHaulier.component';

describe('AddHaulierComponent', () => {
  let component: AddHaulierComponent;
  let fixture: ComponentFixture<AddHaulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHaulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHaulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
