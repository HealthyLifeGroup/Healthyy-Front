import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { Observable, of } from 'rxjs';
import { CreateProfileRequest } from '../../shared/models/createProfile-request.model';
import { UserProfile } from '../../shared/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private baseURL = `${environment.baseURL}/admin/profiles`;
  private http = inject(HttpClient);
  private storageService = inject(StorageService);

  existsProfile(): Observable<boolean> {
    const authData = this.storageService.getAuthData();
    if (!authData) {
      return new Observable(observer => observer.next(false));
    }

    const { username, token } = authData; 
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = new HttpParams().set('username', username);

    return this.http.get<boolean>(`${this.baseURL}/exists`, { headers, params });
  }

  createProfile(profileData: CreateProfileRequest): Observable<CreateProfileRequest>{

    const authData = this.storageService.getAuthData();
    if (!authData) {
      throw new Error('No se encontró información de autenticación');
    }
    
    const { token } = authData; 

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<CreateProfileRequest>(`${this.baseURL}`, profileData, { headers });
  }

  getUserProfile(): Observable<UserProfile>{

    const authData = this.storageService.getAuthData();
    if (!authData) {
      throw new Error('No se encontró información de autenticación');
    }
    const { username, token } = authData; 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<UserProfile>(`${this.baseURL}/${username}`, { headers });
  }

}
