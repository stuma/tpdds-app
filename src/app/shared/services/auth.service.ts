import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private currentUserRolSubject: BehaviorSubject<string>;
  public currentUserRol: Observable<string>;
  loggedIn = true;
  rol: any;

  constructor(private router: Router) {
    this.currentUserRolSubject = new BehaviorSubject<string>(null);
    this.currentUserRol = this.currentUserRolSubject.asObservable();
  }

  logIn(login: string, password: string) {
    if(login == 'gestor'){
      this.rol = 'gestor';
      this.currentUserRolSubject.next(this.rol);
    }
    if(login == 'cobrador'){
      this.rol = 'cobrador';
      this.currentUserRolSubject.next(this.rol);
    }
    this.loggedIn = true;
    this.router.navigate(['/']);
  }

  logOut() {
    this.loggedIn = false;
    this.router.navigate(['/login-form']);
  }

  get isLoggedIn() {
    return this.loggedIn;
  }

  get userRol() {
    return this.rol;
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {
      
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const isLoggedIn = this.authService.isLoggedIn;
        const isLoginForm = route.routeConfig.path === 'login-form';

        if (isLoggedIn && isLoginForm) {
            this.router.navigate(['/']);
            return false;
        }

        if (!isLoggedIn && !isLoginForm) {
            this.router.navigate(['/login-form']);
        }

        return isLoggedIn || isLoginForm;
    }
}
