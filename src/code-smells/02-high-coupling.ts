(() => {

    // Not applying the single responsibility principle

    type Gender = 'M' | 'F';

    // High coupling

    class Person {

        constructor(
            public firstName: string,
            public lastName: string,
            public gender: Gender,
            public birthdate: Date
        ) {

        }
    }

    class User extends Person {
        // public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(firstName, lastName, gender, birthdate);
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
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, new Date(), firstName, lastName, gender, birthdate);
        }
    }

    const newUserSetting = new UserSetting(
        '/home/user',
        '/home/user/documents',
        'fulan@gmail.com',
        'admin',
        'Fulano',
        'De tal',
        'M',
        new Date('1980-12-12'),
    );

    console.log({ newUserSetting, areCredentialsValid: newUserSetting.checkCredentials() });

})();