import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import * as Highcharts from 'highcharts';
import * as io from 'socket.io-client';
export class device {
  id: string;
  value: Number;
  date: Date;
}

@Component({
  selector: 'app-station-tanks-statistic',
  templateUrl: './station-tanks-statistic.component.html',
  styleUrls: ['./station-tanks-statistic.component.scss']
})
export class StationTanksStatisticComponent implements OnInit {

  user: any;
  dataSet: [device];
  dataValue = [5, 700, 8];
  dataDate: [Date];



  highcharts = Highcharts;
  chartOptions: any;
  socket: any;

  constructor(private _serviceUser: UserService) { }

  ngOnInit(): void {
    var values = [];
    this.initchartData();
    this.socket = io('http://localhost:3000');

    this.socket.emit('msg',{msg:"5ef916413cb6b5165869ed32"});

    this.socket.on('From db', async data => {
      console.log(data);
      this.dataSet = await JSON.parse(data);
      this.dataSet.forEach(d => {
        values.push(d.value);
      })
      this.dataValue = values;
      values = [];
      this.updatechartData(this.dataValue);

    })
  }
  public getConnected() {
    this._serviceUser.getuser().subscribe(data => {
      this.user = data;
    });
  }
  updatechartData(datavalues) {
    this.chartOptions = {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'Real time chart'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' :
          'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime',
        minRange: 14 * 24 * 3600000 // fourteen days
      },
      yAxis: {
        title: {
          text: 'L'
        }
      },
      legand: {
        enabled: false
      },
      tooltip: {
        valueSuffix: " L"
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      series: [{
        type: 'area',
        name: 'Value L',
        pointInterval: 24 * 3600 * 1000,
        pointStart: Date.UTC(2006, 0, 1),
        data: datavalues


      }]
    };

  }


  initchartData() {
    this.chartOptions = {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'Real time chart'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' :
          'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime',
        minRange: 14 * 24 * 3600000 // fourteen days
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legand: {
        enabled: false
      },
      tooltip: {
        valueSuffix: "L"
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      series: [{
        type: 'area',
        name: 'Value L',
        pointInterval: 24 * 3600 * 1000,
        pointStart: Date.UTC(2006, 0, 1),
        data: this.dataValue


      }]
    };

  }

}
