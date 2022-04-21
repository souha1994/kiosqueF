import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SolidGaugeComponent } from "./solid-gauge.component";

@NgModule({
    declarations: [SolidGaugeComponent],
    imports: [CommonModule],
    exports: [SolidGaugeComponent],
})
export class SolidGaugeModule {}
