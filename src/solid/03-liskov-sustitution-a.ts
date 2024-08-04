import { Tesla, Audi, Toyota, Honda, Volvo, /*Vehicle,*/ Ford } from './03-liskov-sustitution-b';
import { VehicleRepository } from './03-liskov-sustitution-c';


(() => {
    // const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda | Volvo)[]) => {

    // with ...-b.ts
    // const printCarSeats = (cars: Vehicle[]) => {

    // with ...-c.ts
    const printCarSeats = (cars: VehicleRepository[]) => {

        cars.forEach(car => {

            console.log(car.constructor.name, car.getNumberOfSeats());
        });

        // for (const car of cars) {

        //     if (car instanceof Tesla) {
        //         // console.log('Tesla', car.getNumberOfTeslaSeats())
        //         console.log('Tesla', car.getNumberOfSeats())
        //         continue;
        //     }
        //     if (car instanceof Audi) {
        //         // console.log('Audi', car.getNumberOfAudiSeats())
        //         console.log('Audi', car.getNumberOfSeats())
        //         continue;
        //     }
        //     if (car instanceof Toyota) {
        //         // console.log('Toyota', car.getNumberOfToyotaSeats())
        //         console.log('Toyota', car.getNumberOfSeats())
        //         continue;
        //     }
        //     if (car instanceof Honda) {
        //         // console.log('Honda', car.getNumberOfHondaSeats())
        //         console.log('Honda', car.getNumberOfSeats())
        //         continue;
        //     }
        //     if (car instanceof Volvo) {
        //         // console.log('Volvo', car.getNumberOfVolvoSeats())
        //         console.log('Volvo', car.getNumberOfSeats())
        //         continue;
        //     }
        //     if (car instanceof Ford) {
        //         // console.log('Ford', car.getNumberOfVolvoSeats())
        //         console.log('Ford', car.getNumberOfSeats())
        //         continue;
        //     }

        // }
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Ford(2),
    ];


    printCarSeats(cars);

})();