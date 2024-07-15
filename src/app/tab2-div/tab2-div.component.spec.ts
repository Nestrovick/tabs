import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2DivComponent } from './tab2-div.component';

describe('Tab2DivComponent', () => {
  let component: Tab2DivComponent;
  let fixture: ComponentFixture<Tab2DivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab2DivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab2DivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
