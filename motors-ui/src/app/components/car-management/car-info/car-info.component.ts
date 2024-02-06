import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Car } from 'src/app/models/car-models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  carId: string;
  car: Car; // | null = null;
  constructor(private activatedRoute: ActivatedRoute, private carService: CarsService) {

  }

  ngOnInit(): void {
    this.carId = this.activatedRoute.snapshot.paramMap.get('carId') as string;
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.carId = params.get('carId');
    // });
    this.carService.getCarById(this.carId).subscribe((result: Car) => 
    { 
      this.car = result;
    });
  }
}
