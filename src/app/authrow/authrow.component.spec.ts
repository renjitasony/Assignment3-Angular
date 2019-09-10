import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthrowComponent } from './authrow.component';

describe('AuthrowComponent', () => {
  let component: AuthrowComponent;
  let fixture: ComponentFixture<AuthrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
