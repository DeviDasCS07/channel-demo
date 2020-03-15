import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelListDisplayComponent } from './channel-list-display.component';

describe('ChannelListDisplayComponent', () => {
  let component: ChannelListDisplayComponent;
  let fixture: ComponentFixture<ChannelListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
