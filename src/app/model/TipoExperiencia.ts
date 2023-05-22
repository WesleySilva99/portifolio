export class TipoExperiencia{

    public codigo:number;

    public descricao:string;

    constructor(codigo: number, descricao: string) {
        this.codigo = codigo;
        this.descricao = descricao;
    }


    static preencheTipoExperienciaEnum(codigo: number):TipoExperiencia{
        let retorno:TipoExperiencia;

        if(codigo == 1){
            retorno = new TipoExperiencia(1, "Profissional")
        }else{
            retorno = new TipoExperiencia(2, "Acadêmica")
        }

        return retorno;
    }

}
