export interface VehicleRepository {
    getNumberOfSeats: () => number;
}

// without inheritance and without coupling. Better abstract class.
export class Tesla implements VehicleRepository {
    constructor(private numberOfSeats: number) { }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Audi implements VehicleRepository {
    constructor(private numberOfSeats: number) { }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota implements VehicleRepository {
    constructor(private numberOfSeats: number) { }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda implements VehicleRepository {
    constructor(private numberOfSeats: number) { }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

