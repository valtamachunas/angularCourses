import { Component, OnInit } from '@angular/core';
import { Cursos } from '../nomeCursos';
import { CursoService }   from '../curso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    cursos: Cursos[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos.slice(1,3));
  }
}
