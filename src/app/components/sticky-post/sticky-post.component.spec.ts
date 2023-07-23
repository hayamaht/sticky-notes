import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPostComponent } from './sticky-post.component';

describe('StickyPostComponent', () => {
  let component: StickyPostComponent;
  let fixture: ComponentFixture<StickyPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyPostComponent]
    });
    fixture = TestBed.createComponent(StickyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
