import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tab1DivComponent } from "./tab1-div/tab1-div.component";
import { Tab2DivComponent } from "./tab2-div/tab2-div.component";
import { Tab3DivComponent } from "./tab3-div/tab3-div.component";
import { Tab4DivComponent } from "./tab4-div/tab4-div.component";
import {Chart, registerables} from 'chart.js';
import { YearMonthFilterComponent } from './year-month-filter/year-month-filter.component';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Tab1DivComponent, Tab2DivComponent, Tab3DivComponent, Tab4DivComponent, YearMonthFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tabs';
}
