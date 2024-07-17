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
          115.4, 114.5, 101.2, 101.1, 101.1, 101.1, 97.1, 38.9
        ],
        backgroundColor: (context) => {
          const value = context.raw as number;
          if (value >= 120) {
            return '#f0ce60'; // Amarelo
          } else if (value >= 100) {
            return '#1c5de9'; // Azul
          } else if (value >= 50) {
            return '#a5e01b'; // Verde
          } else {
            return '#a12ac5'; // Roxo
          }
        },
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
    Chart.register(ChartDataLabels);

    const ctx = document.getElementById('percentageChart') as HTMLCanvasElement;

    const data: ChartData<'doughnut'> = {
      labels: ['Atingiram ou superaram a meta', 'Não atingiram a meta'],
      datasets: [
        {
          data: [95.8, 4.2], // Representando as porcentagens
          backgroundColor: ['#f0ce60', '#a12ac5'],
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
          color: '#000',
          formatter: (value: number) => {
            return '';
          },
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    };

    const percentagePlugin = {
      id: 'percentagePlugin',
      beforeDraw: (chart: any) => {
        const { ctx, chartArea: { left, right, bottom } } = chart;
        ctx.save();
        ctx.font = '12px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('0,0%', left + 90, bottom - 5); // Ajuste a posição conforme necessário
        ctx.fillText('100,0%', right - 90, bottom - 5); // Ajuste a posição conforme necessário
        ctx.restore();
      }
    };

    new Chart(ctx, {
      type: 'doughnut',
      data,
      options,
      plugins: [ChartDataLabels, percentagePlugin] // Adicione o plugin personalizado aqui
    } as ChartConfiguration<'doughnut'>);
  }
}
