import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubsOfPubService {

  private url='api/subsofpub';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getSubs(pub:string):Observable<string[]>
  {
    const endUrl = `${this.url}/${pub}`;
    return this.http.get<string[]>(this.url).pipe(
      tap(_=>this.log('fetched Subs')),catchError(this.handleError<string[]>('getSubs',[]))
    );
  }
  private log(message:string){
    this.messageService.add(`SubsOfPubService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
