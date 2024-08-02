import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2-div',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tab2-div.component.html',
  styleUrls: ['./tab2-div.component.scss']
})
export class Tab2DivComponent implements AfterViewInit {
  selectedDate: string = '';
  sections: any[] = [];

  initialData = [
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

  ngAfterViewInit(): void {
    // Define a data selecionada inicialmente para o mês e ano atuais
    const currentDate = new Date();
    this.selectedDate = `${currentDate.getFullYear()}-${('0' + (currentDate.getMonth() + 1)).slice(-2)}`;
    this.updateData(this.selectedDate);
  }

  onYearMonthChange(): void {
    // Simula um atraso para a busca de dados
    setTimeout(() => {
      this.updateData(this.selectedDate);
    }, 0);
  }

  updateData(selectedDate: string): void {
    // Atualiza as seções sem modificar os valores originais
    this.sections = this.initialData.map(section => ({
      ...section,
      federations: section.federations.map(federation => ({
        ...federation,
        value: this.formatNumber(federation.value), // Mantém os valores originais
        percentage: this.formatNumber(federation.percentage) // Mantém os percentuais originais
      }))
    }));
  }

  formatNumber(value: number): string {
    return value.toFixed(2); // Formata o número para 2 casas decimais
  }
}
