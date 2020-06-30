import { PersonGeografy } from "./Geografy";

export class Person {

    id?: number;
    nameFirst?: string;
    nameSecond?: string;
    lastNameFirst?: string;
    lastNameSecond?: string;
    identificationType?: number;
    identificationNumber?: string;
    birthDate?: Date;
    email?: string;
    geographies?: Array<PersonGeografy>;
    startIdUser?: string;
    updateIdUser?: string;
}