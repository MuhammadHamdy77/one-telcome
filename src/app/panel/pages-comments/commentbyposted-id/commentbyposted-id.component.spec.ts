import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentbypostedIdComponent } from './commentbyposted-id.component';

describe('CommentbypostedIdComponent', () => {
  let component: CommentbypostedIdComponent;
  let fixture: ComponentFixture<CommentbypostedIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentbypostedIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentbypostedIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
