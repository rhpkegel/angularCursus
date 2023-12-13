import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBeheerComponent } from './user-beheer.component';

describe('UserBeheerComponent', () => {
  let component: UserBeheerComponent;
  let fixture: ComponentFixture<UserBeheerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBeheerComponent]
    });
    fixture = TestBed.createComponent(UserBeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
