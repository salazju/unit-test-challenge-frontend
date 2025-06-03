import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faCartShopping, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  homeIcon = faHome;
  addIcon = faPlus;
  cartIcon = faCartShopping;
}
