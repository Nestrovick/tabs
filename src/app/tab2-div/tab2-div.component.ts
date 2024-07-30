import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2-div',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab2-div.component.html',
  styleUrls: ['./tab2-div.component.scss']
})
export class Tab2DivComponent implements OnInit {
  selectedDate: string = '';

  sections: any[] = [
    {
      title: 'Passageiro',
      icon: 'fa fa-bus',
      federations: [
        { name: 'FETRAM', value: 397.1, percentage: 132.8 },
        { name: 'SEMOVE', value: 379.6, percentage: 127.0 },
        { name: 'FETESP', value: 377.0, percentage: 126.1 }
      ],
      maxValue: 400,
      progressBarClass: 'bg-success'
    },
    {
      title: 'Cargas',
      icon: 'fa fa-truck',
      federations: [
        { name: 'FETCEMG', value: 384.0, percentage: 203.2 },
        { name: 'FETRAMAZ', value: 296.5, percentage: 156.9 },
        { name: 'FETRANCESC', value: 252.5, percentage: 133.6 }
      ],
      maxValue: 400,
      progressBarClass: 'bg-primary'
    },
    {
      title: 'Misto',
      icon: 'fa fa-bus-alt',
      federations: [
        { name: 'FETRABASE', value: 428.7, percentage: 180.9 },
        { name: 'FETRANSPORTES', value: 402.7, percentage: 169.9 }
      ],
      maxValue: 450,
      progressBarClass: 'bg-warning'
    },
    {
      title: 'Autônomo',
      icon: 'fa fa-user',
      federations: [
        { name: 'FETACMG', value: 238.0, percentage: 127.3 },
        { name: 'FECAMRS', value: 189.0, percentage: 101.1 }
      ],
      maxValue: 250,
      progressBarClass: 'bg-danger'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  updateData(selectedDate: string) {
    this.selectedDate = selectedDate;
  }
}
