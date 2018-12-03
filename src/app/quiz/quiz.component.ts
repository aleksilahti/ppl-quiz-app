import { Component, OnInit } from '@angular/core';
import { QSetService } from '../q-set.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  // displayed in the html
  questions = this.service.getQuestionSet();
  language = this.service.getLanguage();
  resultTitle;
  resultText;
  resultPercentage;
  resultQuestions;
  question = 'Choose how many questions you want to answer';
  answers =  [{'answerText': '1', 'qAmount': 1},
              {'answerText': '5', 'qAmount': 5},
              {'answerText': '10', 'qAmount': 10},
              {'answerText': '25', 'qAmount': 25},
              {'answerText': '50', 'qAmount': 50},
              {'answerText': 'all', 'qAmount': 'all'}];
  image: string;
  // used in the code
  questionIndex;
  maxIndex;
  results = [];
  correctAnswers = 0;

  constructor(private service: QSetService ) { }

  ngOnInit() {
  }

  setQuestionSet(qset) {
    this.questions = qset;
    console.log(this.questions);
    this.shuffle(this.questions);
    console.log('question order was shuffled');
  }
  onSelect(answer): void {
    if (answer.qAmount) {
      this.setMaxQuestions(answer.qAmount);
    }
    if (!answer.qAmount) {
      this.saveAnswer(answer);
      this.questionIndex++; // question was asked move to next question
    }
    if (this.questionIndex < this.maxIndex) {
    this.question = this.getQuestion(this.questionIndex);
    this.answers = this.getAnswers(this.questionIndex);
    this.image = this.getImage(this.questionIndex);
    } else {
      alert('end of quiz');
      this.showResults();
    }
  }
  setMaxQuestions(numberOfQuestions) {
    if (isNaN(numberOfQuestions)) {
      this.maxIndex = this.questions.length;
    } else {
      this.maxIndex = numberOfQuestions;
    }
    this.questionIndex = 0;
    console.log('asking ' + this.maxIndex + ' questions');
  }
  saveAnswer(userAnswer) {
    //counts correct answers
    if (userAnswer.answerCorrectness === 'correct') {
      this.correctAnswers++;
    }
    let question;
    let answers;
    let answer;
    let i;
    question = this.getQuestion(this.questionIndex);
    answers = this.getAnswers(this.questionIndex);
    for (i = 0; i < answers.length; i++) {
      answer = answers[i];
      if (userAnswer.answerText === answer.answerText) {
        if (answer.answerCorrectness === 'correct') {
          answer.userAnswer = 'userAnswerCorrect';
        } else {
          answer.userAnswer = 'userAnswerWrong';
        }
      }
    }

    this.results.push({'question': question, 'answers': answers});
    console.log('answer was ' + userAnswer.answerCorrectness);
  }
  showResults() {
    this.question = null;
    this.answers = null;
    this.resultTitle = this.getResultTitle();
    this.resultText = this.getResultText();
    this.resultPercentage = this.getResultPercentage();
    this.resultQuestions = this.results;
  }
  getResultTitle(){
    let resultTitle;
    let accPercentage;
    accPercentage = (this.correctAnswers / this.maxIndex) * 100;
    if (accPercentage >= 75) {
      resultTitle = 'Test passed!';
    } else {
      resultTitle = 'Test failed! (75% needed to pass)';
    }
    return resultTitle;
  }
  getResultText() {
    return this.correctAnswers + '/' + this.maxIndex + ' Correct';
  }
  getResultPercentage() {
    let percentage;
    percentage = Math.floor((this.correctAnswers / this.maxIndex) * 100);
    return percentage + '%';
  }
  getQuestion(index) {
    return this.questions[index]['question'];
  }
  getAnswers(index) {
    let answerArray;
    answerArray = this.questions[index]['answers'];
    answerArray = this.shuffle(answerArray);
    return answerArray;
  }
  getImage(index) {
    let image;
    if (this.questions[index]['image']) {
      image = '/assets/appendix_images/' + this.questions[index]['image'];
      console.log('showing image from ' + image);
      return image;
    }
  }
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

}