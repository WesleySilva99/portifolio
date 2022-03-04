export class Experience{

  public id:string;

  public descricaoPrincipal:string;

  public descricaoSecundaria:string;

  public descricaoDaFuncao:string;

  public empresa:string;

  public dataInicio:string;

  public dataFim:string;

  public tipoExperiencia:string;


  constructor(id: string, descricaoPrincipal: string, descricaoSecundaria: string, descricaoDaFuncao: string, empresa: string, dataInicio: string, dataFim: string, tipoExperiencia: string) {
    this.id = id;
    this.descricaoPrincipal = descricaoPrincipal;
    this.descricaoSecundaria = descricaoSecundaria;
    this.descricaoDaFuncao = descricaoDaFuncao;
    this.empresa = empresa;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.tipoExperiencia = tipoExperiencia;
  }

}
