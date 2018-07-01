import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteClassComponent } from './teste-class.component';

describe('TesteClassComponent', () => {
  let component: TesteClassComponent;
  let fixture: ComponentFixture<TesteClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
