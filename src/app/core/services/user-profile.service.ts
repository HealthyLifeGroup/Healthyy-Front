import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private baseURL = `${environment.baseURL}/admin/profiles`;
  private http = inject(HttpClient);  
  private storageService = inject(StorageService);

  existsProfile(): Observable<boolean> {
    const authData = this.storageService.getAuthData;
    const params = new HttpParams().set('username', authData.name);
    return this.http.get<boolean>(`${this.baseURL}/exists`, { params }).pipe(
      map(response => response),
      catchError(() => of(false)) // En caso de error, devuelve false
    );
  }



}
