import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  quizCategory: any[] = this.categoryService.quizCategory

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getQuizCategory();
  }
}
