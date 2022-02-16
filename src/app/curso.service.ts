import { Injectable } from '@angular/core';
import { Cursos } from './nomeCursos';
import { CURSOS } from './mock-cursos';
import { Observable, of } from 'rxjs';
import { MensagemService } from './mensagem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  private cursosURL = 'api/cursos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient, private mensagemService: MensagemService) { }

  getCurso(id: number): Observable<Cursos> { //constroi uma url de solicitação para o heroi desejado 
    const url = `${this.cursosURL}/${id}`; //quando usar string literal usar sempre o dolar antes da variavel pq a string literal é uma concatenacao
    return this.http.get<Cursos>(url)//troquei tudo de baixo para aplicar o httclient, troquei o of() pelo http.get() para pegar dados do servidor, com o http podemos realizar requisições e receber uma unica resposta 
    .pipe(
      tap(_ => this.log(`fetched cursos id =${id}`)), //olha os valores observable e envia uma msg atraves do metodo log declarado abaixo
      catchError(this.handleError<Cursos>(`getCursos id=${id}`)) //ve o observable que falhou e passa para a função handleerror lidar com ela e dar uma resposta 
    );
    //const cursos = of(CURSOS);
    //this.mensagemService.add('Fui clicado');
    //return cursos;
  }

  /** GET cursos from the server */
getCursos(): Observable<Cursos[]> {
  return this.http.get<Cursos[]>(this.cursosURL)
    .pipe(
      tap(_ => this.log('Cursos')),
      catchError(this.handleError<Cursos[]>('getCursos', []))
    );
}

/** PUT: update the curso on the server */
updateCurso(curso: Cursos[]): Observable<any> {
  return this.http.put(this.cursosURL, curso, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${curso[0].id}`)),
    catchError(this.handleError<any>('updateCurso'))
  );
}

  private log(mensagem: string){
    this.mensagemService.add(`CursoService: ${mensagem}`);
  }
 
}

