// ? -> significa que os atributos nao serao obrigatorios na criacao do obj
export class Tarefa {
  constructor(public id?: number, public nome?: string, public concluida?: boolean) {
  }
}