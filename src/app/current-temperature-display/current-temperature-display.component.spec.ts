import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTemperatureDisplayComponent } from './current-temperature-display.component';

describe('CurrentTemperatureDisplayComponent', () => {
  let component: CurrentTemperatureDisplayComponent;
  let fixture: ComponentFixture<CurrentTemperatureDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTemperatureDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTemperatureDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
