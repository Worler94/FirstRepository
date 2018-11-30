import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponetComponent } from './like-componet.component';

describe('LikeComponetComponent', () => {
  let component: LikeComponetComponent;
  let fixture: ComponentFixture<LikeComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
