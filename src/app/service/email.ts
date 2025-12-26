import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, map, Observable, of } from 'rxjs';
import { Endpoints } from './endpoints';
import { HttpClient } from '@angular/common/http';
import {
  EvaluationFormType,
  OrientationFormType,
  TherapyFormType,
} from '../interfaces/services.interface';

const baseUrl = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private http = inject(HttpClient);

  sendForm(
    form: TherapyFormType | OrientationFormType | EvaluationFormType,
    endpoint: Endpoints
  ): Observable<boolean> {
    function removeEmpty(obj: TherapyFormType | OrientationFormType | EvaluationFormType) {
      return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
    }
    return this.http.post<number>(`${baseUrl}${endpoint}`, removeEmpty(form)).pipe(
      map((resp) => {
        console.log(resp);
        return true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }
}
