(() => {

    // Not applying the single responsibility principle

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

    // const newPerson = new Person('Fulano', 'M', new Date('1980-12-12'));
    // console.log({ newPerson });

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSetting extends User {

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const newUserSetting = new UserSetting(
        '/home/user',
        '/home/user/documents',
        'fulan@gmail.com',
        'admin',
        'Fulano',
        'M',
        new Date('1980-12-12'),
    );

    console.log({ newUserSetting, areCredentialsValid: newUserSetting.checkCredentials() });

})();