import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cursos } from './nomeCursos';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
//implements ele implementa a interface entao a classe tem que ter tudo que ela tem

  createDb() {
    const cursos = [
      {area: 'Exatas', nome: 'Matematica', id: 1},
      {area: 'Humanas', nome: 'Psicologia ', id: 2},
      {area: 'Saúde', nome: 'Veterinária', id: 3},
      {area: 'Sociais', nome: 'Direito', id: 4 }
    ];
    return {cursos};
  }
  genId(curso: Cursos[]): number {
    return curso.length > 0 ? Math.max(...curso.map(curso => curso.id)) + 1 : 11;
  }
  constructor() { }
}
