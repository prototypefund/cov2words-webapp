export interface Metadata {
  name: string,
  owner: string,
  uuid: string,
  categories?: string[]
}

export class Question {
  constructor(
    public id: string,
    public category: string,
    public text: string,
    public inputType: string,
    public options: string[],
    public nextQuestionMap: string[],
    public uuid: string
  ) { }
}

export class Questionaire {
  constructor(
    public metadata: Metadata,
    public questions: Question[],
    public statements: any
  ) { }
}

