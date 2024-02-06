import { Subject } from 'rxjs';
import { CarInfoComponent } from './car-info.component';

describe('CarInfoComponent', () => {
  let component: CarInfoComponent;

  let activatedRoute: any;
  let carService: any;

  let control = new Subject();

  beforeEach(async () => {
    activatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get')
        }
      }
    }

    carService = {
      getCarById: () => ({
        control
      })
    }
    
    component = new CarInfoComponent(
      activatedRoute,
      carService
    );
  });

  it('should create', () => {

    component.ngOnInit();
    control.next('');
    expect(component.car).toEqual('');
  });
});
