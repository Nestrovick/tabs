import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab4DivComponent } from './tab4-div.component';

describe('Tab4DivComponent', () => {
  let component: Tab4DivComponent;
  let fixture: ComponentFixture<Tab4DivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab4DivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab4DivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
