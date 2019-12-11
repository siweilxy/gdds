import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PubsOfSubService {

  private url='api/pubsofsub';
  constructor(private messageService:MessageService,private http:HttpClient) { }
  getPubs(sub:string):Observable<string[]>
  {
    const endUrl = `${this.url}/${sub}`;
    return this.http.get<string[]>(endUrl).pipe(
      tap(_=>this.log('fetched Pubs')),catchError(this.handleError<string[]>('getPubs',[]))
    );
  }
  private log(message:string){
    this.messageService.add(`PubsOfSubService:${message}`);
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed:${error.message}`);
      return of(result as T);
    };
  }
}
