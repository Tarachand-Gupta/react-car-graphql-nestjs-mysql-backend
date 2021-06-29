import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { CarsService } from './cars.service';
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";



@Resolver()
export class CarsResolver{
    constructor(private carsService:CarsService){}


    @Query((returns) => [Car])
    public async cars():Promise<Car[]>{

        return await this.carsService.getAllCars().catch((err)=>{
            throw err; 
        });
    }

    @Mutation(returns=>Car)
    public async addNewCar(@Args('newCarData')newCarData:NewCarInput):Promise<Car>{
        return await this.carsService.addCar(newCarData).catch((err)=>{
            throw err;
        });
    }
    



    
}