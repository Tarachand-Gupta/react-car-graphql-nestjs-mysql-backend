import { CarsService } from './cars.service';
export declare class CarResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<string>;
}
