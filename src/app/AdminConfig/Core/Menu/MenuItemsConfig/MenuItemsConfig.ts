import { Injectable }                                       from "@angular/core";

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    submenu?: SubmenuItems[];
  }
  
  export interface SubmenuItems {
    state: string;
    name: string;
    type?: string;
  }
  
  export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    children?: ChildrenItems[];
  }
  
  const MENUITEMS = [
    {
      state: '/admin-config/admin/',
      name: 'Seguridad',
      type: 'sub',
      icon: 'https',/* https */
      children: [
       
          {state: 'usuario', name: '- Usuario',type : 'link'},
          {state: 'access', name: '- Acceso',type : 'link'},
          {state: 'perfil', name: '- Sistema',type : 'link'},
        

      ]
    },
    {
      state: '/admin-config/admin',
      name: 'RRHH',
      type: 'sub',
      icon: 'directions_car', /* directions_car */
      children: [

          {state: 'employee', name: '- Empleados',type : 'link'},
          {state: 'change', name: '- Incremento y/o Cambio de Cargo',type : 'link'},
          {state: 'grade', name: '- Grados',type : 'link'},
          {state: 'scale', name: '- Escalas',type : 'link'},
          {state: 'comission', name: '- Comisiones',type : 'link'},
          {state: 'auth', name: '- Autorizadores',type : 'link'},
        
      ]
    },

    // {
    //   state: '/session/main-session/signin',
    //   name: 'ir a principal',
    //   type: 'link',
    //   icon: 'home' /* home */
    // }
  ];

  @Injectable()
export class AdminMenuItemsConfig {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}