
export class AssigmentData {

numAssigment: number;
subject: string;
herf: string;
ref: number[] = [];


constructor(numAssigment: number, subject: string, herf: string, ref: number[]) {

  this.subject = subject;
  this.herf = herf;
  this.numAssigment = numAssigment;
  this.ref = ref;
}

}
