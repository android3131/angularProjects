import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseContentComponent } from './base-content.component';

describe('BaseContentComponent', () => {
  let component: BaseContentComponent;
  let fixture: ComponentFixture<BaseContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseContentComponent]
    });
    fixture = TestBed.createComponent(BaseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
