import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './bug';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BugService {

  // Base url
  baseurl = 'https://jsonplaceholder.typicode.com';
  basic = '';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // // POST
  CreateBug(data): Observable<Bug> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ///'Authorization': string
      });
      let options = { headers: headers };
     // let options = new RequestOptions({headers:headers});
    return this.http.post<Bug>(this.baseurl + '/blogstest/add/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

   // POST
  //  CreateBug(data): Observable<Bug> {
  //   return this.http.post<Bug>(this.baseurl + '/blogstest/add/', JSON.stringify(data),  {
  //     headers: new HttpHeaders({
  //          'Content-Type':  'application/json',
  //        })
  //   } )
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }  



  // GET Single Blog
  GetIssue(id): Observable<Bug> {
    return this.http.get<Bug>(this.baseurl + '/todos/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetIssues(): Observable<Bug[]> {
    //return this.http.get<Bug>(this.baseurl + '/blogstest')
    return this.http.get<Bug[]>(this.baseurl + '/todos')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateBug(id, data): Observable<Bug> {
    return this.http.put<Bug>(this.baseurl + '/todos/edit/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteBug(id){
    return this.http.delete<Bug>(this.baseurl + '/todos/delete/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}