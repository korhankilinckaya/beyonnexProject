import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'current-temperature-display',
  templateUrl: './current-temperature-display.component.html',
  styleUrls: ['./current-temperature-display.component.css']
})
export class CurrentTemperatureDisplayComponent implements OnInit {
  @Input() minimum: number = 0;
  @Input() maximum: number = 0;
  @Input() target: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
