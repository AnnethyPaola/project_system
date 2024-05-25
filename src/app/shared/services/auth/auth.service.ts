import { isPlatformBrowser } from "@angular/common";
import { Observable, catchError, map, of } from "rxjs";
import { LoginUsers } from "../../interfaces/users/users";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import * as CryptoJS from 'crypto-js';
import { apiServiceUsers } from "../api.service";
import { environment } from "../../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private urlApi: string = environment.API ;
    public tokenKey = 'authToken';
    private secretKey = 'your-secret-key';

    constructor(
        private http: HttpClient,
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    public login(email: string, password: string): Observable<boolean> {
        return this.http.get<any>(this.urlApi).pipe(
          map(data => {
            const users = data.users; 
            const user = users.find((u: { email: string; password: string; }) => u.email === email && u.password === password);
            if (user) {
              const token = this.generateToken({ email: user.email });
              this.setToken(token);
              return true;
            }
            return false; 
          }),
          catchError(this.handleError<boolean>('login', false))
        );
      }
    

    public logout(): void {
        if (isPlatformBrowser(this.platformId)) {
            for (const key in localStorage) {
                if (key.startsWith(this.tokenKey)) {
                    localStorage.removeItem(key);
                }
            }
            this.clearToken();
        }
        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {
        return !!this.getToken();
    }

    public generateToken(payload: any): string {
        const header = {
            alg: 'HS256',
            typ: 'JWT'
        };
        const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
        const encodedHeader = this.base64url(stringifiedHeader);

        const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
        const encodedData = this.base64url(stringifiedData);

        const token = `${encodedHeader}.${encodedData}`;
        const signature = CryptoJS.HmacSHA256(token, this.secretKey);
        const encodedSignature = this.base64url(signature);

        return `${token}.${encodedSignature}`;
    }

    private base64url(source: CryptoJS.lib.WordArray): string {
        let encodedSource = CryptoJS.enc.Base64.stringify(source);
        encodedSource = encodedSource.replace(/=+$/, '');
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');
        return encodedSource;
    }

    private setToken(token: string): void {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(this.tokenKey, token);
        }
    }

    private getToken(): string | null {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem(this.tokenKey);
        }
        return null;
    }

    private clearToken(): void {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(this.tokenKey);
        }
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
