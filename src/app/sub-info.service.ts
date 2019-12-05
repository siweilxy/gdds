import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Subinfo } from './subinfo';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubInfoService {
  private url='api/subinfos';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getSubInfos():Observable<Subinfo[]>
  {
    return this.http.get<Subinfo[]>(this.url).pipe(
      tap(_=>this.log('fetched subinfos')),catchError(this.handleError<Subinfo[]>('getSubinfos',[]))
    );
  }

  getSubInfo(id:string):Observable<Subinfo>{
    const url=`${this.url}/${id}`;
    return this.http.get<Subinfo>(url).pipe(
      tap(_=>this.log(`fetched SubInfo id=${id}`)),catchError(this.handleError<Subinfo>(`getSubInfo id=${id}`))
    );
  }

  private log(message:string){
    this.messageService.add(`SubInfoService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
