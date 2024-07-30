(() => {

    // Not applying the single responsibility principle

    type Gender = 'M' | 'F';

    interface PersonProperties {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProperties) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            birthdate,
            email,
            gender,
            name,
            role,
        }: UserProperties) {
            super({ name, gender, birthdate });

            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface UserSettingProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSetting extends User {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory,
        }: UserSettingProperties) {
            super({ birthdate, email, gender, name, role });

            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const newUserSetting = new UserSetting({
        birthdate: new Date('1980-12-12'),
        email: 'fulan@gmail.com',
        gender: 'M',
        name: 'Fulano',
        role: 'admin',
        lastOpenFolder: '/home/user/documents',
        workingDirectory: '/home/user',
    });

    console.log({ newUserSetting, areCredentialsValid: newUserSetting.checkCredentials() });

})();