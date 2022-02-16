import { Component, OnInit } from '@angular/core';
import { Cursos } from '../nomeCursos';
import { CursoService } from '../curso.service';
import { MensagemService } from '../mensagem.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //selecioneCurso?: Cursos;
  
  nomeCursos: Cursos[] = [];

  constructor(private cursoService: CursoService, private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  //selecione(curso: Cursos): void{
    //this.selecioneCurso = curso;
    //this.mensagemService.add("Cursos: Selecione curso nome=${Cursos.nome}")
  //}

  getCursos():void {
    this.cursoService.getCursos().subscribe(nomeCursos => this.nomeCursos = nomeCursos);
  }
  

}
