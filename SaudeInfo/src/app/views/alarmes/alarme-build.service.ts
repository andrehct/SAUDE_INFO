import { Injectable } from '@angular/core';
import { Alarme } from 'src/app/components/receita/receita.model';
import { ReceitaService } from 'src/app/components/receita/receita.service';

@Injectable({
  providedIn: 'root'
})
export class AlarmeBuildService {

  alarmes: Alarme[] = new Array;

  constructor(private receitaService: ReceitaService) { }

  setAlarme(alarme: Alarme){
    this.alarmes.push(alarme);
  }

  getAlarmes(){
    this.alarmes = this.alarmes.sort((a, b) => a.data+a.horario > b.data+b.horario ? 1 : -1);
    return this.alarmes;
  }
}
