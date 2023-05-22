import { Component, OnInit } from '@angular/core';
import {ExperienciaService} from "../service/experiencia.service";
import {Experience} from "../model/Experience";
import {TipoExperiencia} from "../model/TipoExperiencia";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  selected = 'option2';

  experiences: Experience[] = [];
  experienciasTratadas: Experience[] = [];

  constructor(public service:ExperienciaService) {
  }

  ngOnInit(): void {
    this.preencheListaDeExperiencias();
  }

  preencheListaDeExperiencias(){

    this.service.listaTodos().subscribe(response => {
      this.experiences = response;
      this.experiences.forEach(item => {
        item.tipoExperienciaEnum = TipoExperiencia.preencheTipoExperienciaEnum(item.tipoExperiencia);
        console.log(item);
        this.experienciasTratadas.push(item);
      });
    });

  }

}