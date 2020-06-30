import { environment } from "src/environments/environment";

export class Constant {

    urls = {
        session: {
            postLoggin: environment.server + 'api/ssuser/login',
            postEmail: environment.server + 'api/user/recoverPassword',
            putCode: environment.server + 'api/user/recoverPassword',
            putNewpassword: environment.server + 'api/user/:userId/password',

            getUser: environment.server + 'api/session/user/:userId',
            putUser: environment.server + 'api/session/user/:userId',
            getUserQuestionSecret: environment.server + 'api/session/questionSecret/user/:username',

            postEmailR: environment.server + 'api/user/register',
            putCodeR: environment.server + 'api/user/register',
            putRegister: environment.server + 'api/user/:userId/password',
        },
        reference: {
            getReference: environment.server + 'api/reference/:domain',
            getReferenceByLvalue: environment.server + 'api/reference/:domain/:lvalue'
        },

        person: {
            getPerson: environment.server + 'api/person',
            postPerson: environment.server + 'api/person/insertPersonFromAdmin',
            putPerson: environment.server + 'api/person'
        },
        geografy: {
            getGeografy: environment.server + 'api/geographygeographyPerson',
            postGeografy: environment.server + 'api/geographygeographyPerson',
            putGeografy: environment.server + 'api/geographygeographyPerson'
        },
       
        user: {
            getUsers: environment.server + 'api/ssuser/list',
            postUser: environment.server + 'api/ssuser',
            putUser: environment.server + 'api/ssuser/update',

            getUserType: environment.server + 'api/typeuser',
            getUserRol: environment.server + 'api/ssroluser/',

            getListRolUser:environment.server + 'api/ssroluser/list',
            deleterol:environment.server +  'api/ssroluser/delete/:idUser',
            getByIdUser:environment.server +  'api/ssroluser/listByUser/:idUser',
            postRolUser:environment.server +  'api/ssroluser/'
            
        },

        rol: {
            getRols: environment.server + 'api/ssRol/list',
            postRol: environment.server + 'api/ssRol/insert',
            putRol: environment.server + 'api/ssRol/update',
        },

        profile: {
            getProfile: environment.server + 'api/profile',
            postProfile: environment.server + 'api/profile',
            putProfile: environment.server + 'api/profile',
        },

        listGeografy: {

            getListCountry: environment.server + 'api/country',
            getListFederalByCountry: environment.server + 'api/federalState/parent/:idCountry',
            getListProvincesByFederal: environment.server + 'api/provinces/parent/:idFederal',
            getListMunicipalityByProvince: environment.server + 'api/municipality/parent/:idProvince',
           
        },

        resferencia:{

            getListReferen: environment.server + 'api/reference/TYPE_DOCUMENT'
        },
                
        userCompany:{
            getAll: environment.server + 'api/usercompany',
            getByIdEmpresa: environment.server + 'api/usercompany/company/:idEmpresa',
            getByIdUser: environment.server + 'api/usercompany/user/:idUser',
            postUserCompany: environment.server + 'api/usercompany',
            putUserCompany: environment.server + 'api/usercompany'
        },

        menuOption:{

            getListMenu:environment.server + 'api/ssMenu/list',
            deletemenu:environment.server +  'api/ssrolmenu/delete/:idRol',
            getByIdRol:environment.server +  'api/ssrolmenu/listByRol/:idRol',
            postRolMenu:environment.server +  'api/ssrolmenu/'
        }
        
    }
}
