import { Reference } from "./Reference";

 export class Company {
    id: string;
    idCountryRef ?: Reference;
    typeCompanyRef?: Reference;
    typePersonLegalRef?: Reference;
    fullName?: string;
    shortName?: string;
    firstFiscalNumber?: string;
    secondFiscalNumber?: string;
    address?: string;
    addressFiscal?: string;
    postalCode?: number;
    tradeActivityRef?: Reference;
    firstPhone?: string;
    secondPhone?: string;
    firstEmail?: string;
    foundationDate?: Date;
    webPage?: string;
    pathLogo?: string;
    status?: Boolean;
     
 }
    
