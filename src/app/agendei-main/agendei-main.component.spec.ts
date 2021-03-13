/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgendeiMainComponent } from './agendei-main.component';

describe('AgendeiMainComponent', () => {
  let component: AgendeiMainComponent;
  let fixture: ComponentFixture<AgendeiMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendeiMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendeiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
