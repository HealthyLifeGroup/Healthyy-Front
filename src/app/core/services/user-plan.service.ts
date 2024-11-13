import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StorageService } from './storage.service';
import { UserPlanRequest } from '../../shared/models/user-plan-request.model';
import { Observable } from 'rxjs';
import { UserPlanResponse } from '../../shared/models/user-plan-response.model';
import { Page } from '../../shared/models/page.model';

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

  getActivePlans(page: number, size: number): Observable<any> {
    const authData = this.storageService.getAuthData();
    if (!authData) {
      throw new Error('No se encontró información de autenticación');
    }

    const { token } = authData; 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

        return this.http.get<any>(`${this.baseURL}/page`, { params, headers });  
    }
    getPlanById(planId:number) : Observable<UserPlanResponse>{
      const authData = this.storageService.getAuthData();
      if (!authData) {
        throw new Error('No se encontró información de autenticación');
      }
  
      const { token } = authData; 
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get<UserPlanResponse>(`${this.baseURL}/${planId}`, {headers});
    }
}
