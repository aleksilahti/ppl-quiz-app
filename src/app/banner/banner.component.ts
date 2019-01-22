import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { QSetService } from '../q-set.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(private service: QSetService) { }
  pageHeader = '010 Ilmailulaki';
  language = 'fin';
  langButtonText = 'English';
  qSet = 'airLaw';
  changeLanguage() {
    if (this.language === 'fin') {
      this.language = 'eng';
      this.langButtonText = 'Suomi';
    } else {
      this.language = 'fin';
      this.langButtonText = 'English';
    }
    console.log('Language changed to ' + this.language);
    this.changeQuestionSet(this.qSet);
  }

  changeQuestionSet(newQuestionSet): void {
    console.log('changing question set to ' + newQuestionSet);
      switch (newQuestionSet) {
        case 'info':
          this.qSet = 'info';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = 'Info';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = 'Info';
          }
          break;
        case 'airLaw':
          this.qSet = 'airLaw';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '010 Ilmailulaki(Huom! Osa-alueen kysymyksiin ei ole vielä vastauksia)';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '010 Air Law';
          }
          break;
        case 'aircraftGeneralKnowledge':
          this.qSet = 'aircraftGeneralKnowledge';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '020 Lentokoneen yleistuntemus';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '020 Aircraft General Knowledge';
          }
          break;
        case 'performanceAndFlightMonitoring':
          this.qSet = 'performanceAndFlightMonitoring';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '030 Suoritusarvot ja lennonsuunnittelu(Huom! Osa-alueen kysymyksiin ei ole vielä vastauksia)';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '030 Performance and Flight Monitoring';
          }
          break;
        case 'humanPerformance':
          this.qSet = 'humanPerformance';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '040 Ihmisen suorituskyky(Huom! Osa-alueen kysymyksiin ei ole vielä vastauksia)';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '040 Human Performance';
          }
          break;
        case 'meteorology':
          this.qSet = 'meteorology';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '050 Sääoppi(Huom! Osa-alueen kysymyksiin ei ole vielä vastauksia)';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '050 Meteorology';
          }
          break;
        case 'navigation':
          this.qSet = 'navigation';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '060 Lentosuunnistus(Huom! Osa-alueen kysymyksiin ei ole vielä vastauksia)';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '060 Navigation';
          }
          break;
        case 'operationalProcedures':
          this.qSet = 'operationalProcedures';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '070 Lentotoiminta';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '070 Operational Procedures';
          }
          break;
        case 'principlesOfFlight':
          this.qSet = 'principlesOfFlight';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '080 Lennonteoria';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '080 Principles of Flight';
          }
          break;
        case 'Communications':
          this.qSet = 'Communications';
          if (this.language === 'fin') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '090 Radiopuhelinliikenne';
          } else if (this.language === 'eng') {
            this.service.setActiveQuestionSet(this.qSet, this.language);
            this.pageHeader = '090 Communications';
          }
          break;
    }
  }

  ngOnInit() {
    this.service.setActiveQuestionSet(this.qSet, this.language);
  }

}
