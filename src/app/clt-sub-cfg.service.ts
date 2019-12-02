import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Subcfg } from './subcfg';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CltSubCfgService {
  private pubcfgUrl='api/subcfgs';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getSubCfgs():Observable<Subcfg[]>
  {
    return this.http.get<Subcfg[]>(this.pubcfgUrl).pipe(
      tap(_=>this.log('fetched cltsubcfgs')),catchError(this.handleError<Subcfg[]>('getSubCfgs',[]))
    );
  }

  getSubCfg(id:string):Observable<Subcfg>{
    const url=`${this.pubcfgUrl}/?id=${id}`;
    return this.http.get<Subcfg>(url).pipe(
      tap(_=>this.log(`fetched subcfg id=${id}`)),catchError(this.handleError<Subcfg>(`getsubcfg id=${id}`))
    );
  }

  private log(message:string){
    this.messageService.add(`CltSubCfgService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
