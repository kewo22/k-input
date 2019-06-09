import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KInputLibComponent } from './k-input-lib.component';

describe('KInputLibComponent', () => {
  let component: KInputLibComponent;
  let fixture: ComponentFixture<KInputLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KInputLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KInputLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
