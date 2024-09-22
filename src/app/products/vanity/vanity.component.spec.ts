import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanityComponent } from './vanity.component';

describe('VanityComponent', () => {
  let component: VanityComponent;
  let fixture: ComponentFixture<VanityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VanityComponent]
    });
    fixture = TestBed.createComponent(VanityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
