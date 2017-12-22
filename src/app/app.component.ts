import { Component, OnInit } from '@angular/core';
import {JeopardyService } from './jeopardy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  answer;
  showAnswer;
  score=0;
  reply;

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getDataFromService()
  }

 

  youClickedMe() {
    console.log(this.answer);


    if(this.answer===this.questionInfo.answer) {
      this.score=this.questionInfo.value+this.score;
      this.showAnswer=this.questionInfo.answer;
      this.reply="That answer is correct!  You have been awarded "+this.questionInfo.value+" dollars."

    }
    else {
      this.showAnswer=this.questionInfo.answer;
      this.reply="That answer is incorrect."
    }
  }
    nextQuestion() {
      this.getDataFromService();
      this.showAnswer=null;
      this.answer=null;

    }
   
    
   
  }


