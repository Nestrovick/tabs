import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-year-month-filter',
  standalone: true,
  imports: [],
  templateUrl: './year-month-filter.component.html',
  styleUrl: './year-month-filter.component.scss'
})
export class YearMonthFilterComponent {
  @Output() dateChange = new EventEmitter<string>();

  onDateChange(event: any) {
    this.dateChange.emit(event.target.value);
  }
}
