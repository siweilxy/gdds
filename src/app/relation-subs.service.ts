import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelationSubsService {

  private url='api/relationSubs';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getSubs(ap_id_cd:string):Observable<string[]>
  {
    const endUrl = `${this.url}/${ap_id_cd}`;
    return this.http.get<string[]>(endUrl).pipe(
      tap(_=>this.log('fetched Subs')),catchError(this.handleError<string[]>('getSubs',[]))
    );
  }
  private log(message:string){
    this.messageService.add(`RelationSubsService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
