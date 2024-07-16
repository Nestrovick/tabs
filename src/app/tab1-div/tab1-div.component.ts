import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-tab1-div',
  standalone: true,
  templateUrl: './tab1-div.component.html',
  styleUrls: ['./tab1-div.component.scss']
})
export class Tab1DivComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createChart();
    this.createPercentageChart();
    
  }

  createChart() {
    Chart.register(ChartDataLabels);

    const ctx = document.getElementById('rankingChart') as HTMLCanvasElement;

    const data: ChartData<'bar'> = {
      labels: [
        'FETCEMG - 1°', 'FETRABASE - 2°', 'FETRANSPORTES - 3°', 'FETRAMAZ - 4°',
        'FETRANCESC - 5°', 'FETRAM - 6°', 'FETCESP - 7°', 'FETACMG - 8°',
        'SEMOVE - 9°', 'FETCESP - 10°', 'FETRACAN - 11°', 'FETRANSUL - 12°',
        'FENATAC - 13°', 'FETRASUL - 14°', 'FETRANSCARGA - 15°', 'FETRANSPAR - 16°',
        'FETERGS - 17°', 'FETRALSE - 18°', 'FETRAMAR - 19°', 'FEPASC - 20°',
        'FECAMRS - 21°', 'FETRANS - 22°', 'FETRONOR - 23°', 'FETRONORTE - 24°'
      ],
      datasets: [{
        label: 'Percentual da Meta Atingida',
        data: [
          203.2, 180.9, 169.5, 156.9, 133.6, 132.2, 132.2, 127.3,
          127.3, 126.1, 123.9, 122.3, 122.0, 119.6, 119.2, 118.5,
          115.4, 114.5, 101.2, 101.1, 101.1, 101.1, 100.8, 38.9
        ],
        backgroundColor: (context) => {
          const value = context.raw as number;
          if (value >= 120) {
            return '#db3434'; // Vermelho
          } else if (value >= 100) {
            return '#1c5de9'; // Azul
          } else if (value >= 50) {
            return '#a5e01b'; // Verde
          } else {
            return '#a12ac5'; // Roxo
          }
        },
        borderColor: '#000',
        borderWidth: 1
      }]
    };

    const options: ChartOptions<'bar'> = {
      indexAxis: 'y',
      scales: {
        x: {
          display: false, // Remove o eixo X
        },
        y: {
          grid: {
            display: false // Remove as grades da escala Y
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.raw}%`
          }
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          formatter: (value) => `${value}%`,
          color: '#000',
          font: {
            weight: 'bold'
          }
        }
      }
    };

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: data,
      options: options
    };

    new Chart(ctx, config);
  }

  createPercentageChart() {
    const ctx = document.getElementById('percentageChart') as HTMLCanvasElement;

    const data: ChartData<'doughnut'> = {
      labels: ['Atingiram ou superaram a meta', 'Não atingiram a meta'],
      datasets: [
        {
          data: [95.8, 4.2], // Representando as porcentagens
          backgroundColor: ['#1c5de9', '#db3434'],
          borderWidth: 0,
        },
      ],
    };

    const options: ChartOptions<'doughnut'> = {
      responsive: true,
      maintainAspectRatio: false,
      rotation: -90,
      circumference: 180,
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: '#fff',
          formatter: (value: number, context: any) => {
            return value === 95.8 ? '95.8%' : '';
          },
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    };

    new Chart(ctx, {
      type: 'doughnut',
      data,
      options,
    } as ChartConfiguration<'doughnut'>);
}
}