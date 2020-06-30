import { Rol } from "./Rol";

export class User {

    userId: number;
    name?: string;
    username?: string;
    lastName?: string;
    secondName?: string;
    secondLastname?: string;
    secretQuestion?: string;
    secretAnswer?: string;
    country?: string;
    countryRefId?: string;
    typeStateCivil?: string;
    typeStateCivilRefId?: string;
    typeProfession?: string;
    typeProfessionRefId?: string;
    typeEducation?: string;
    typeEducationRefId?: string;
    typeDoc?: string;
    typeDocRefId?: string;
    gender?: string;
    genderRefId?: string;
    birthDate?: string;
    numIden?: string;
    numIdenFiscal?: string;
    firstNumPhone?: string;
    secondNumPhone?: string;
    email?: string;
    address?: string;
    postalCode?: string;
    gradeLicense?: string;
    numLicense?: string;
    status?: boolean;
    feccre?: string;
    rols?: Array<Rol>
    company?: string;
    companyId?: number;
}