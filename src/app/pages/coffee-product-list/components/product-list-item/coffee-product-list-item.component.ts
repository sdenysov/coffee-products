import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {CoffeeProduct} from '@@shared/models/coffee-product';


@UntilDestroy()
@Component({
  selector: 'app-coffee-product-list-item',
  templateUrl: './coffee-product-list-item.component.html',
  styleUrls: ['./coffee-product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeProductListItemComponent {

  @Input() coffeeProduct!: CoffeeProduct;
  @Output() showCoffeeProductDetails: EventEmitter<string> = new EventEmitter<string>();

}
