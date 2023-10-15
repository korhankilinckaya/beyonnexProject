import { Component, Input, OnInit } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'current-temperature-display',
  templateUrl: './current-temperature-display.component.html',
  styleUrls: ['./current-temperature-display.component.css']
})
export class CurrentTemperatureDisplayComponent implements OnInit {
  @Input() minimum!: number;
  @Input() maximum!: number;
  @Input() target!: number;
  leftLegRotation: number = 30;
  rightLegRotation: number = 330;

  constructor() {}

  ngOnInit(): void {}

  calculatedRadiusRotation = (): number => {
    let displayArea = this.rightLegRotation - this.leftLegRotation;
    let scaledDisplayAreaForInputs = this.maximum - this.minimum;

    let radiusCoefficient = (this.target - this.minimum)/scaledDisplayAreaForInputs;

    let radiusPlacement = (displayArea*radiusCoefficient) + this.leftLegRotation;

    return radiusPlacement;
  };
}
