import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { UserGoalsRequest } from '../../shared/models/user-goals-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGoalService {

  private baseURL = `${environment.baseURL}/admin/goals`;
  private http = inject(HttpClient);

  createGoal(goalData: UserGoalsRequest): Observable<any>{
    return this.http.post<UserGoalsRequest>(`${this.baseURL}`, goalData);
  }
}
