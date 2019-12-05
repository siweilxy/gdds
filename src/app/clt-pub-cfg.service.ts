import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Pubcfg } from './pubcfg';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CltPubCfgService {
  private pubcfgUrl='api/pubcfgs';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getPubCfgs():Observable<Pubcfg[]>
  {
    return this.http.get<Pubcfg[]>(this.pubcfgUrl).pipe(
      tap(_=>this.log('fetched cltpubcfgs')),catchError(this.handleError<Pubcfg[]>('getPubCfgs',[]))
    );
  }

  getPubCfg(id:string):Observable<Pubcfg>{
    const url=`${this.pubcfgUrl}/${id}`;
    return this.http.get<Pubcfg>(url).pipe(
      tap(_=>this.log(`fetched pubcfg id=${id}`)),catchError(this.handleError<Pubcfg>(`getpubcfg id=${id}`))
    );
  }

  private log(message:string){
    this.messageService.add(`CltPubCfgService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
