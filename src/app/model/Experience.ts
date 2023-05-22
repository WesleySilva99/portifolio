import {TipoExperiencia} from "./TipoExperiencia";
import {Skill} from "./Skill";

export class Experience{

  public id:string;

  public descricaoAtividades:string;

  public descricaoSecundaria:string;

  public descricaoDaFuncao:string;

  public nomeEmpresa:string;

  public dataInicio:string;

  public dataFim:string;

  public tipoExperiencia:number;

  public tipoExperienciaEnum:TipoExperiencia;

  public cargo:string;

  public skills: Skill[];

  constructor(id: string, descricaoAtividades: string, descricaoSecundaria: string, descricaoDaFuncao: string, nomeEmpresa: string, dataInicio: string, dataFim: string, tipoExperiencia: number,cargo: string, tipoExperienciaEnum: TipoExperiencia, skills: Skill[]) {
    this.id = id;
    this.descricaoAtividades = descricaoAtividades;
    this.descricaoSecundaria = descricaoSecundaria;
    this.descricaoDaFuncao = descricaoDaFuncao;
    this.nomeEmpresa = nomeEmpresa;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.tipoExperiencia = tipoExperiencia;
    this.cargo = cargo;
    this.tipoExperienciaEnum = tipoExperienciaEnum;
    this.skills = skills;
  }

}
