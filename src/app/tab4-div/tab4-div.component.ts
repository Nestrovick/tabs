import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-tab4-div',
  standalone: true,
  templateUrl: './tab4-div.component.html',
  styleUrls: ['./tab4-div.component.scss']
})
export class Tab4DivComponent implements AfterViewInit {
  chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('barchart') as HTMLCanvasElement;
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        datasets: [
          {
            label: '2023',
            data: [1.704, 1.808, 2.056, 2.034, 1.864, 2.128, 1.976, 2.172, 1.880, 1.849, 1.889, 2.012],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            barThickness: 32
          },
          {
            label: '2024',
            data: [1.951, 2.056, 1.999, 1.754, 1.864, 2.056],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            barThickness: 32
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              display: false
            },
            border: {
              display: false
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              autoSkip: false,
              font: {
                size: 12
              }
            },
            border: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            position: 'top'
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: '#000',
            font: {
              weight: 'bold'
            },
            rotation: -90
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }

  onYearChange(event: Event) {
    const selectedYear = (event.target as HTMLSelectElement).value;
    this.updateChart();
  }

  selectAllSegments(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const checkboxes = document.querySelectorAll('.year-month-container input[type="checkbox"]');
   ;
    this.updateChart();
  }

  onSegmentChange(event: Event) {
    this.updateChart();
  }

  updateChart() {
    // Atualize os dados do gráfico com base na seleção atual
    // Por exemplo, você pode fazer uma nova consulta de dados aqui
    // No exemplo a seguir, simplesmente renderizamos o gráfico novamente
    this.renderChart();
  }
}
