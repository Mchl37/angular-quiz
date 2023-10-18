import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  quizCategory: any[] = this.categoryService.quizCategory

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getQuizCategory();
  }
  navigateToQuiz() {
    this.router.navigate(['/quiz', 'adjmkadj']);
  }

  // rechercheTerm: string = '';
  // onSubmit() {
  //   // Logique de recherche (à personnaliser)
  //   console.log("Terme de recherche : " + this.rechercheTerm);
  // }

  // clearSearch() {
  //   this.rechercheTerm = ''; // Réinitialise le terme de recherche
  // }
}
