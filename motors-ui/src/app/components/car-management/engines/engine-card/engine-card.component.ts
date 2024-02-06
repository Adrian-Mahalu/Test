import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Engine } from 'src/app/models/car-models/engine';
import { Petrol, Diesel, Hybrid, Electricity, Hydrogen } from 'src/app/common/fuel-type-constants';

@Component({
  selector: 'app-engine-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './engine-card.component.html',
  styleUrls: ['./engine-card.component.scss']
})
export class EngineCardComponent {
  @Input() engine: Engine;
  Petrol: string = Petrol;
  Diesel: string = Diesel;
  Hybrid: string = Hybrid;
  Electricity: string = Electricity;
  Hydrogen: string = Hydrogen;

  
  constructor(private activatedRoute: ActivatedRoute)
  {
  
  }

  getVerticalBarColorClassByEndOfProduction(endOfProduction: number){
    return (endOfProduction != null) ? 'ce-red-background' : 'ce-green-background';
  }
  
  getProductionTextColorClassByEndOfProduction(endOfProduction: number) {
  return (endOfProduction != null) ? 'ce-red-color' : 'ce-green-color';
  }
}
