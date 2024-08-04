(() => {

    // Applying the single responsibility principle
    // Prioritize composition over inheritance

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
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email,
            role,
        }: UserProperties) {

            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface SettingProperties {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Setting {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({
            lastOpenFolder,
            workingDirectory,
        }: SettingProperties) {

            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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

    class UserSettings {

        public person: Person;
        public user: User;
        public setting: Setting;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingProperties) {

            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.setting = new Setting({ lastOpenFolder, workingDirectory });
        }
    }

    const newUserSetting = new UserSettings({
        birthdate: new Date('1980-12-12'),
        email: 'fulan@gmail.com',
        gender: 'M',
        name: 'Fulano',
        role: 'admin',
        lastOpenFolder: '/home/user/documents',
        workingDirectory: '/home/user',
    });

    console.log({ newUserSetting, areCredentialsValid: newUserSetting.user.checkCredentials() });

})();