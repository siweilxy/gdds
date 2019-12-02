import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Pubinfo } from './pubinfo';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PubInfoService {
  private url='api/pubinfos';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getPubInfos():Observable<Pubinfo[]>
  {
    return this.http.get<Pubinfo[]>(this.url).pipe(
      tap(_=>this.log('fetched pubinfos')),catchError(this.handleError<Pubinfo[]>('getPubInfos',[]))
    );
  }

  getPubInfo(id:string):Observable<Pubinfo>{
    const url=`${this.url}/?id=${id}`;
    return this.http.get<Pubinfo>(url).pipe(
      tap(_=>this.log(`fetched Pubinfo id=${id}`)),catchError(this.handleError<Pubinfo>(`getPubinfo id=${id}`))
    );
  }

  private log(message:string){
    this.messageService.add(`PubinfoService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
