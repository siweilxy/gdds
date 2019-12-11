import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RelationPubsService {

  private url='api/relationPubs';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getPubs(ap_id_cd:string):Observable<string[]>
  {
    const endUrl = `${this.url}/${ap_id_cd}`;
    return this.http.get<string[]>(this.url).pipe(
      tap(_=>this.log('fetched Pubs')),catchError(this.handleError<string[]>('getPubs',[]))
    );
  }
  private log(message:string){
    this.messageService.add(`PubtsService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
