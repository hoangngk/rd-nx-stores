import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'rd-nx-stores-horizontal-stepper',
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: HorizontalStepperComponent }],
})
export class HorizontalStepperComponent extends CdkStepper implements OnInit {
  // constructor() { }

  public ngOnInit(): void {
    return;
  }

  public selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
