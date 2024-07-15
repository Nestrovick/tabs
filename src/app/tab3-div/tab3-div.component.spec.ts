import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3DivComponent } from './tab3-div.component';

describe('Tab3DivComponent', () => {
  let component: Tab3DivComponent;
  let fixture: ComponentFixture<Tab3DivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab3DivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab3DivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
