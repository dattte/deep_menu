import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepMenuComponent } from './deep-menu.component';

describe('DeepMenuComponent', () => {
  let component: DeepMenuComponent;
  let fixture: ComponentFixture<DeepMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
