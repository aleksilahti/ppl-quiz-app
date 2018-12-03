import { Injectable } from '@angular/core';
import * as $ from 'jquery';
// import * as Questions010fin from '../questions/010fin.json'; // these should be loaded from the server with jQuery...
// import * as Questions020fin from '../questions/020fin.json';
// import * as Questions030fin from '../questions/030fin.json';
// import * as Questions040fin from '../questions/040fin.json';
// import * as Questions050fin from '../questions/050fin.json';
// import * as Questions060fin from '../questions/060fin.json';
// import * as Questions070fin from '../questions/070fin.json';
// import * as Questions080fin from '../questions/080fin.json';
// import * as Questions090fin from '../questions/090fin.json';
// import * as Questions010eng from '../questions/010eng.json';
// import * as Questions020eng from '../questions/020eng.json';
// import * as Questions030eng from '../questions/030eng.json';
// import * as Questions040eng from '../questions/040eng.json';
// import * as Questions050eng from '../questions/050eng.json';
// import * as Questions060eng from '../questions/060eng.json';
// import * as Questions070eng from '../questions/070eng.json';
// import * as Questions080eng from '../questions/080eng.json';
// import * as Questions090eng from '../questions/090eng.json';

@Injectable({
  providedIn: 'root'
})
export class QSetService {
  activeQuestionSet: string;
  language: string;
  qset;
  /*loadQuestionSet() {
    switch (this.activeQuestionSet + this.language) {
      case 'infofin':
        break;
      // case 'infoeng':
        // break;
      case 'airLawfin':
        return Questions010fin;
      // case 'airLaweng':
        // return Questions010eng;
      case 'aircraftGeneralKnowledgefin':
        return Questions020fin;
      // case 'aircraftGeneralKnowledgeeng':
        // return Questions020eng;
      case 'performanceAndFlightMonitoringfin':
        return Questions030fin;
      // case 'performanceAndFlightMonitoringeng':
        // return Questions030eng;
      case 'humanPerformancefin':
        return Questions040fin;
      // case 'humanPerformanceeng':
        // return Questions040eng;
      case 'meteorologyfin':
        return Questions050fin;
      // case 'meteorologyeng':
        // return Questions050eng;
      case 'navigationfin':
        return Questions060fin;
      // case 'navigationeng':
        // return Questions060eng;
      case 'operationalProceduresfin':
        return Questions070fin;
      // case 'operationalProcedureseng':
        // return Questions070eng;
      case 'principlesOfFlightfin':
        return Questions080fin;
      // case 'principlesOfFlighteng':
        // return Questions080eng;
      case 'Communicationsfin':
        return Questions090fin;
      // case 'Communicationseng':
        // return Questions090eng;
  }
  }*/
  setActiveQuestionSet(qSet, lang): void {
    this.activeQuestionSet = qSet;
    this.language = lang;
    console.log('new service qSet ' + qSet + lang);
  }
  getLanguage() {
    return this.language;
  }
  getQuestionSet() {
    console.log('asking for question set');
    this.fetchJSONFile('../questions/070fin.json');
    return this.qset;
  }
  fetchJSONFile(path) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                console.log(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}
  constructor() { }
}
