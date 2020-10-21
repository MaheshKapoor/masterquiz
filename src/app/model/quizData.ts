import {Question} from "./question";
/**
 * Created by abc on 10/20/2020.
 */

export class QuizData {
  quizTitle: string;
  quizDescription:string;
  quizMetaTag:string;
  quizThumbNail:string;
  quizId:string;
  quizLevel:string;
  questions:Question[];
  quizScore:string;
  quizTotalQuestions:string;

}
