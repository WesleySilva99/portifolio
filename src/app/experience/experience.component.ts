import { Component, OnInit } from '@angular/core';
import {ExperienciaService} from "../service/experiencia.service";
import {Experience} from "../model/Experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(public service:ExperienciaService) {
  }

  ngOnInit(): void {
    this.preencheListaDeExperiencias();
  }

  preencheListaDeExperiencias(){

    this.service.listaTodos().subscribe(response => {
      this.experiences = response;
      console.log(response);
    });

  }

}
