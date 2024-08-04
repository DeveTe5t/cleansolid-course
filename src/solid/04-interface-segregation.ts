
interface EatingBird {
    eat(): void;
}

interface FlingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements EatingBird, FlingBird {

    public eat() { }
    public fly() { return 100; }
}

class Humminbird implements EatingBird, FlingBird {

    public eat() { }
    public fly() { return 300; }
}

class Ostrich implements EatingBird, RunningBird {

    public eat() { }
    public run() { }
}

class Penguin implements EatingBird, SwimmingBird {

    public eat() { }
    public swim() { }
}