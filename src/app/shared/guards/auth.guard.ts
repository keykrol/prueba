import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../Services/Session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: SessionService, private router: Router) { }

  public canActivate()

        {
              if (this.authService.getAuthRol() !== 'cliente') //Obtenemos en nuestro servicio el rol y nos fijamos si es igual o no al de 'Admin 
                {
                  
                          this.router.navigate(['/session/main-session/signin']); //Lo enviamos a la página que queramos
                          return false;
                }
          return true; //Este camino deja continuar con la vista con normalidad
        }
  
  
}
