import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  quizCategory: any[] = [];
  quizContent: any[] = [];

  constructor(private http: HttpClient) { }

  getQuizCategory() {
    this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      for (const category of categories) {
        this.http.get(`http://localhost:3000/questions?questionId=${questions.id}`).subscribe((questions: any) => {
          this.quizCategory.push({
            id: category.id,
            category: category.name,
            question: questions.questionLabel
          })
        })
      }
    })
  }
}
