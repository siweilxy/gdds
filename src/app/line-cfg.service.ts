import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Linecfg } from './linecfg';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LineCfgService {
  private linecfgUrl='api/linecfgs';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getLineCfgs():Observable<Linecfg[]>
  {
    return this.http.get<Linecfg[]>(this.linecfgUrl).pipe(
      tap(_=>this.log('fetched linecfgs')),catchError(this.handleError<Linecfg[]>('getLineCfgs',[]))
    );
  }

  getLineCfg(id:string):Observable<Linecfg>{
    const url=`${this.linecfgUrl}/${id}`;
    return this.http.get<Linecfg>(url).pipe(
      tap(_=>this.log(`fetched linecfg id=${id}`)),catchError(this.handleError<Linecfg>(`getlinecfg id=${id}`))
    );
  }

  private log(message:string){
    this.messageService.add(`LineCfgService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
