import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { UserPlanRequest } from '../../shared/models/user-plan-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPlanService {

  private baseURL = `${environment.baseURL}/admin/plans`;
  private http = inject(HttpClient);
  private storageService = inject(StorageService);

  createPlan(planData: UserPlanRequest): Observable<any>{
    const authData = this.storageService.getAuthData();

    if (!authData) {
      throw new Error('No se encontró información de autenticación');
    }

    const { token } = authData; 

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<UserPlanRequest>(`${this.baseURL}`, planData, { headers });

  }

}
