import { Component, Input } from '@angular/core';
import Template from '../../models/template.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-image-detail-view',
  templateUrl: './image-detail-view.component.html',
  styleUrls: ['./image-detail-view.component.scss'],
})
export class ImageDetailViewComponent {
  @Input() template?: Template;
  baseURL = environment.baseURL;
}
