import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QSetService {
  activeQuestionSet: string;
  language: string;
  qset;
  questionSetUrl = 'assets/questions/';

  changeQuestionSet() {
    console.log('changing question set');
    switch (this.activeQuestionSet + this.language) {
      case 'infofin':
        return this.questionSetUrl + '090fin.json';
        break;
      case 'infoeng':
      return this.questionSetUrl + '090fin.json';
        break;
      case 'airLawfin':
        console.log('new url: ' + this.questionSetUrl + '010fin');
        return this.questionSetUrl + '010fin.json';
      case 'airLaweng':
        console.log('new url: ' + this.questionSetUrl + '010eng');
        return this.questionSetUrl + '010eng.json';
      case 'aircraftGeneralKnowledgefin':
        console.log('new url: ' + this.questionSetUrl + '020fin');
        return this.questionSetUrl + '020fin.json';
      case 'aircraftGeneralKnowledgeeng':
        console.log('new url: ' + this.questionSetUrl + '020eng');
        return this.questionSetUrl + '020eng.json';
      case 'performanceAndFlightMonitoringfin':
        console.log('new url: ' + this.questionSetUrl + '030fin');
        return this.questionSetUrl + '030fin.json';
      case 'performanceAndFlightMonitoringeng':
        console.log('new url: ' + this.questionSetUrl + '030eng');
        return this.questionSetUrl + '030eng.json';
      case 'humanPerformancefin':
        console.log('new url: ' + this.questionSetUrl + '040fin');
        return this.questionSetUrl + '040fin.json';
      case 'humanPerformanceeng':
        console.log('new url: ' + this.questionSetUrl + '040eng');
        return this.questionSetUrl + '040eng.json';
      case 'meteorologyfin':
        console.log('new url: ' + this.questionSetUrl + '050fin');
        return this.questionSetUrl + '050fin.json';
      case 'meteorologyeng':
        console.log('new url: ' + this.questionSetUrl + '050eng');
        return this.questionSetUrl + '050eng.json';
      case 'navigationfin':
        console.log('new url: ' + this.questionSetUrl + '060fin');
        return this.questionSetUrl + '060fin.json';
      case 'navigationeng':
        console.log('new url: ' + this.questionSetUrl + '060eng');
        return this.questionSetUrl + '060eng.json';
      case 'operationalProceduresfin':
        console.log('new url: ' + this.questionSetUrl + '070fin');
        return this.questionSetUrl + '070fin.json';
      case 'operationalProcedureseng':
        console.log('new url: ' + this.questionSetUrl + '070eng');
        return this.questionSetUrl + '070eng.json';
      case 'principlesOfFlightfin':
        console.log('new url: ' + this.questionSetUrl + '080fin');
        return this.questionSetUrl + '080fin.json';
      case 'principlesOfFlighteng':
        console.log('new url: ' + this.questionSetUrl + '080eng');
        return this.questionSetUrl + '080eng.json';
      case 'Communicationsfin':
        console.log('new url: ' + this.questionSetUrl + '090fin');
        return this.questionSetUrl + '090fin.json';
      case 'Communicationseng':
        console.log('new url: ' + this.questionSetUrl + '090eng');
        return this.questionSetUrl + '090eng.json';
  }}
  setActiveQuestionSet(qSet, lang): void {
    this.activeQuestionSet = qSet;
    this.language = lang;
    console.log('new service qSet ' + qSet + lang);
  }
  getLanguage() {
    return this.language;
  }

  getQuestionSet() {
    let Qfile: any = this.changeQuestionSet();
    console.log(Qfile);
    return this.http.get(Qfile);
  }
  constructor(private http: HttpClient) { }
}
