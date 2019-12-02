import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Subts } from './subts';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubTsService {
  private url='api/subts';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getSubtses():Observable<Subts[]>
  {
    return this.http.get<Subts[]>(this.url).pipe(
      tap(_=>this.log('fetched Subts')),catchError(this.handleError<Subts[]>('getSubts',[]))
    );
  }

  getSubts(id:string):Observable<Subts>{
    const url=`${this.url}/?id=${id}`;
    return this.http.get<Subts>(url).pipe(
      tap(_=>this.log(`fetched Subts id=${id}`)),catchError(this.handleError<Subts>(`getSubts id=${id}`))
    );
  }

  private log(message:string){
    this.messageService.add(`SubtsService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
