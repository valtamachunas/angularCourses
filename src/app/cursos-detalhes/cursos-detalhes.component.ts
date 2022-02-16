import { Component, Input, OnInit} from '@angular/core';
import { Cursos } from '../nomeCursos';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css']
})
export class CursosDetalhesComponent implements OnInit {

  //@Input() curso?: Cursos[];
  curso: Cursos[];

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }

  getCurso(): void{
    const area = +this.route.snapshot.paramMap.get('id');
    this.cursoService.getCursos().subscribe(curso => this.curso = curso);
  }

    voltar(): void{
      this.location.back();
    }

    save(): void{
      this.cursoService.updateCurso(this.curso).subscribe(() => this.voltar());
    }
}
