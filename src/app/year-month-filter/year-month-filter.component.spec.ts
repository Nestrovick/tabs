import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthFilterComponent } from './year-month-filter.component';

describe('YearMonthFilterComponent', () => {
  let component: YearMonthFilterComponent;
  let fixture: ComponentFixture<YearMonthFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearMonthFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearMonthFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
