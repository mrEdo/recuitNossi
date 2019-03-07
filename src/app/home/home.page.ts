import { Component } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { WordpressService } from '../providers/wordpress.service';
import { CategoryListPage } from '../category-list/category-list.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: any;

  constructor(public router: Router, public wp: WordpressService){
    this.retrieveCategories();
  }
  ionViewDidLoad(){
    this.wp.retrieveCategories().subscribe(results => {
      this.categories = results.json();
      console.log(results);
    });
  }
  retrieveCategories(){
    this.wp.retrieveCategories().subscribe(results => {
      this.categories = results.json();
      console.log(results);
    });
  }
  loadCategory(id: number){
    this.router.navigate(['/category-list'],{
      queryParams: {categoryID: id}
    });
  }
}
