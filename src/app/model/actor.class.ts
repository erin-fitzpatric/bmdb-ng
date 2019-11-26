import { ɵLocaleDataIndex } from '@angular/core';
import { stringify } from 'querystring';

export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: number; // unsure about date type???

    constructor(id: number, firstName: string, lastName: string,
        gender: string, birthDate: number) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.birthDate = birthDate;
    }
}
