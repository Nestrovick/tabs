import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Adicione isso


@Component({
  selector: 'app-tab2-div',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tab2-div.component.html',
  styleUrls: ['./tab2-div.component.scss']
})
export class Tab2DivComponent implements OnInit {
  selectedDate: string = '';

  sections: any[] = [
    {
      title: 'PASSAGEIRO',
      icon: 'fas fa-bus',
      federations: [
        { name: 'FETRAM', value: 392.5, percentage: 132.8 },
        { name: 'SEMOVE', value: 379.6, percentage: 127.1 },
        { name: 'FETESP', value: 377.1, percentage: 126.1 }
      ],
      maxValue: 400,
      progressBarClass: 'bg-success'
    },
    {
      title: 'CARGAS',
      icon: 'fas fa-truck',
      federations: [
        { name: 'FETCEMG', value: 384.1, percentage: 203.2 },
        { name: 'FETRAMAZ', value: 296.5, percentage: 156.9 },
        { name: 'FETRANCESC', value: 252.5, percentage: 133.6 }
      ],
      maxValue: 400,
      progressBarClass: 'bg-primary'
    },
    {
      title: 'MISTO',
      icon: 'fas fa-bus-alt',
      federations: [
        { name: 'FETRABASE', value: 428.7, percentage: 180.9 },
        { name: 'FETRANSPORTES', value: 402.7, percentage: 169.9 },
        { name: 'FETCESP', value: 400.7, percentage: 161.9 }
      ],
      maxValue: 450,
      progressBarClass: 'bg-warning'
    },
    {
      title: 'AUTÔNOMO',
      icon: 'fas fa-user',
      federations: [
        { name: 'FETACMG', value: 238.3, percentage: 127.3 },
        { name: 'FECAMRS', value: 189.1, percentage: 101.1 },
        { name: 'FEPASC', value: 153.7, percentage: 99.9 }
      ],
      maxValue: 250,
      progressBarClass: 'bg-danger'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  updateData(selectedDate: string) {
    this.selectedDate = selectedDate;
    // Update sections data based on selectedDate
    // This could involve making an API call or filtering existing data
  }
}
