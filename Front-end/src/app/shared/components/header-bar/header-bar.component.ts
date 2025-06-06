import { Component } from '@angular/core';
import { LogoComponent } from '../../../Header/logo/logo.component';
import { SearchComponent } from '../../../Header/search/search.component';
import { SinginAdminComponent } from '../../../Header/singin-admin/singin-admin.component';
import { BasketComponent } from '../../../basket/basket.component';
import { CategoryComponent } from '../../../Header/category/category.component';


@Component({
  selector: 'app-header-bar',
  imports: [LogoComponent, SearchComponent, SinginAdminComponent, BasketComponent, CategoryComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {

}
