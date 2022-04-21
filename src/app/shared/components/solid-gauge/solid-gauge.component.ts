import {
    Component,
    OnInit,
    Input,
    OnChanges,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
} from "@angular/core";
import * as Highcharts from "highcharts/highcharts";
import { TankService } from "app/shared/services/tank.service";
import { interval, Subscription } from "rxjs";
import { AlerteService } from 'app/shared/services/alertes.service';

@Component({
    selector: "app-solid-gauge",
    templateUrl: "./solid-gauge.component.html",
    styleUrls: ["./solid-gauge.component.scss"],
})
export class SolidGaugeComponent implements AfterViewInit, OnDestroy {
    @Input() tank: any;
    gaugeOptions: any;
    connectedUser  = localStorage.getItem("connectedId");
    subscription: Subscription;
    source = interval(5000);
    value: any;
    constructor(
        private alertService: AlerteService,
        private tankService: TankService

    ) { }

    ngAfterViewInit(): void {
        console.log(this.connectedUser);

        this.initChart(this.tank.lastValue.value);
        if (this.tank.lastValue.value<(this.tank.capacity/4)){
            console.log("true");

            this.alertService.subscribes(this.connectedUser).subscribe(data=>{
                console.log(data);
            })
        }
        this.subscription = this.source.subscribe((val) => { this.getlastValueByTank(); this.initChart(this.value) });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getlastValueByTank() {
        this.tankService.getHistoriqueByTanks(this.tank.id).subscribe(
            res => {
                this.value = res.value;
                console.log(this.value );
            }
        )
    }
    
    private initChart(value: any) {
        this.gaugeOptions = {
            chart: {
                type: "solidgauge",
            },
            title: null,
            pane: {
                center: ["50%", "85%"],
                size: "140%",
                startAngle: -90,
                endAngle: 90,
                background: {
                    innerRadius: "60%",
                    outerRadius: "100%",
                    shape: "arc",
                },
            },
            tooltip: {
                enabled: false,
            },
            yAxis: {
                min: 0,
                max: this.tank.capacity, // to change
                title: {
                    text: "" + this.tank.type,
                    y: -70,
                },
                stops: [
                    [0.1, "#55BF3B"],
                    [0.5, "#DDDF0D"],
                    [0.9, "#DF5353"],
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,

                labels: {
                    y: 16,
                },
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true,
                    },
                },
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: "",
                    data: [value],
                    dataLabels: {
                        format: "" + value + " (L)",
                    },
                    tooltip: {
                        valueSuffix: "" + value,
                    },
                },
            ],
        };
        Highcharts.chart(this.tank.id, Highcharts.merge(this.gaugeOptions));
    }
}
