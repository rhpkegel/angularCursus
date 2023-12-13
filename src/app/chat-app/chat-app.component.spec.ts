import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAppComponent } from './chat-app.component';

describe('ChatAppComponent', () => {
  let component: ChatAppComponent;
  let fixture: ComponentFixture<ChatAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatAppComponent]
    });
    fixture = TestBed.createComponent(ChatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
