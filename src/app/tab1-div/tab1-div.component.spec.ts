import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1DivComponent } from './tab1-div.component';

describe('Tab1DivComponent', () => {
  let component: Tab1DivComponent;
  let fixture: ComponentFixture<Tab1DivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab1DivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab1DivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
