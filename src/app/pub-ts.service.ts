import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Pubts } from './pubts';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PubTsService {
  private url='api/pubts';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getPubtses():Observable<Pubts[]>
  {
    return this.http.get<Pubts[]>(this.url).pipe(
      tap(_=>this.log('fetched Pubts')),catchError(this.handleError<Pubts[]>('getPubts',[]))
    );
  }

  getPubts(id:string):Observable<Pubts>{
    const url=`${this.url}/${id}`;
    return this.http.get<Pubts>(url).pipe(
      tap(_=>this.log(`fetched Pubts id=${id}`)),catchError(this.handleError<Pubts>(`getPubts id=${id}`))
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
