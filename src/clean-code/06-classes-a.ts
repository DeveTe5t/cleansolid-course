(() => {

    type Gender = 'M' | 'F';

    class Person {

        // way 1
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor(name: string, gender: Gender, birthdate: Date) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }

        // way 2
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {

        }
    }

    const newPerson = new Person('Fulano', 'M', new Date('1980-12-12'));
    console.log({ newPerson });

})();