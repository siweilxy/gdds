import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApInfo } from './apinfo';
import { APINfOS } from './mock-apinfo';
import { MessageService } from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ApInfoService {
  private apinfosUrl = 'api/apinfos';
  constructor(private messageService: MessageService,private http:HttpClient) { }

  getApInfos(): Observable<ApInfo[]> {
    // TODO: send the message _after_ fetching the apinfos
    //this.messageService.add('ApInfoService: fetched apinfos');
    return this.http.get<ApInfo[]>(this.apinfosUrl)
    .pipe(
      tap(_=>this.log('fetched apinfos')),
      catchError(this.handleError<ApInfo[]>('getApinfos',[]))
      );
    //return of(APINfOS);
  }

    /** GET hero by id. Return `undefined` when id not found */
    // getApinfoNo404<Data>(id: string): Observable<ApInfo> {
    //   const url = `${this.apinfosUrl}/:id=${id}`;
    //   return this.http.get<ApInfo[]>(url)
    //     .pipe(
    //       map(apinfos => apinfos[0]), // returns a {0|1} element array
    //       tap(h => {
    //         const outcome = h ? `fetched` : `did not find`;
    //         this.log(`${outcome} apinfo id=${id}`);
    //       }),
    //       catchError(this.handleError<ApInfo>(`getApinfo id=${id}`))
    //     );
    // }

  getApInfo(id: string): Observable<ApInfo> {
    // TODO: send the message _after_ fetching the apinfo
    //this.messageService.add(`ApInfoService: fetched apinfo id=${id}`);
    const url = `${this.apinfosUrl}/${id}`;

    //const url = `${this.apinfosUrl}/?ap_id_cd=${id}`;


    // return this.http.get<ApInfo>(url).pipe(
    //   tap(_=>this.log(`fetched apinfo id =${id}`)),catchError(this.handleError<ApInfo>(`getApinfo id=${id}`))
    // );
    //return this.http.get<ApInfo>(url);
    console.error(url);
    return this.http.get<ApInfo>(url).pipe(
      tap(_ => this.log(`fetched apinfo id=${id}`)),
      catchError(this.handleError<ApInfo>(`getapinfo id=${id}`))
    );
  }

  searchApinfos(term:string):Observable<ApInfo[]>
  {
    if(!term.trim())
    {
      return of([]);
    }

    return this.http.get<ApInfo[]>(`${this.apinfosUrl}/?ap_id_cd=${term}`);
  }

  /** POST: add a new hero to the server */
  addApinfo (apinfo: ApInfo): Observable<ApInfo> {
    return this.http.post<ApInfo>(this.apinfosUrl, apinfo, httpOptions).pipe(
      tap((newApinfo: ApInfo) => this.log(`added apinfo w/ id=${newApinfo.ap_id_cd}`)),
      catchError(this.handleError<ApInfo>('addApinfo'))
    );
  }
 
  /** DELETE: delete the hero from the server */
  deleteApinfo (apinfo: ApInfo | string): Observable<ApInfo> {
    const id = typeof apinfo === 'string' ? apinfo : apinfo.ap_id_cd;
    const url = `${this.apinfosUrl}/${id}`;
 
    return this.http.delete<ApInfo>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted apinfo id=${id}`)),
      catchError(this.handleError<ApInfo>('deleteApinfo'))
    );
  }
 
  /** PUT: update the hero on the server */
  updateApinfo (apinfo: ApInfo): Observable<any> {
    return this.http.put(this.apinfosUrl, apinfo, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${apinfo.ap_id_cd}`)),
      catchError(this.handleError<any>('updateApinfo'))
    );
  }

  private log(message: string) {
    this.messageService.add(`ApinfoService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

