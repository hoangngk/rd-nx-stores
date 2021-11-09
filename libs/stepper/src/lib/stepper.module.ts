import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalStepperComponent } from './horizontal-stepper/horizontal-stepper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';

@NgModule({
  imports: [CommonModule, CdkStepperModule],
  declarations: [HorizontalStepperComponent],
  exports: [CdkStepperModule, HorizontalStepperComponent],
})
export class StepperModule {}
