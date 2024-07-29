import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-tab3-div',
  standalone: true,
  templateUrl: './tab3-div.component.html',
  styleUrls: ['./tab3-div.component.scss']
})
export class Tab3DivComponent implements AfterViewInit {
  chart: Chart | undefined;

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    Chart.register(ChartDataLabels);

    const ctx = document.getElementById('rankingtrans') as HTMLCanvasElement; 

    if (!ctx) {
      console.error('Canvas element not found');
      return;
    }

    const data: ChartData<'bar'> = {
      labels: [
        'FETRANSPORTES - 1°', 'FETRACAN - 2°', 'FETCESP - 3°', 'FETRANSPAR - 4°',
        'FETCEMG - 5°', 'FETRAMAZ - 6°', 'FENATAC - 7°', 'FETRANSCARGA - 8°',
        'FETRANSUL - 9°', 'FETRABASE - 10°', 'FETRANS - 11°', 'FECAMRS - 12°',
        'FETCESP - 13°', 'FETRAM - 14°', 'FETRONOR - 15°', 'FETRANSPAR - 16°',
        'FEPASC - 17°', 'FETRAMAR - 18°', 'FETRALSE - 19°', 'SEMOVE - 20°',
        'FETRANSCARGA - 21°', 'FECAMRS - 22°', 'FETRAMAR - 23°', 'FETRASUL - 24°'
      ],
      datasets: [{
        label: 'Número de Transportadores Atendidos',
        data: [
          591, 510, 507, 490, 482, 450, 428, 413,
          411, 407, 400, 391, 375, 363, 270, 221,
          185, 140, 112, 99, 75, 54, 33, 28
        ],
        backgroundColor: '#007bff', // Azul
        barThickness: 20, // Aumenta a grossura das barras
      }]
    };

    const options: ChartOptions<'bar'> = {
      indexAxis: 'y',
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      },
      scales: {
        x: {
          display: false, // Oculta o eixo X e suas grades
        },
        y: {
          display: true,
          grid: {
            display: false // Remove as grades da escala Y
          },
          ticks: {
            autoSkip: false, // Não pula automaticamente os rótulos
            font: {
              size: 12
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.raw}`
          }
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          formatter: (value) => `${value}`,
          color: '#000',
          font: {
            weight: 'bold'
          }
        }
      },
      animation: {
        duration: 2000 // Define a duração da animação para 2 segundos
      }
    };

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: data,
      options: options
    };

    this.chart = new Chart(ctx, config);
  }

  onYearMonthSegmentChange() {
    this.chart?.destroy();
    this.createChart();
  }

  selectAllMonths(event: any) {
    const checkboxes = document.querySelectorAll('input[name="month"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = event.target.checked;
    });
    this.onYearMonthSegmentChange();
  }
}
