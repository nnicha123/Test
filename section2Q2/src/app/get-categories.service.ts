import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {
  private Url = 'https://api.publicapis.org/categories';

  constructor(private http:HttpClient){}

  getCategories():Observable<any>{
    return this.http.get<any>(this.Url).pipe(
      map(el => el),
      catchError(this.handleError)
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(error);
    };
  }
  
}
