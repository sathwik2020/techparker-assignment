import { Component, Input, Output, EventEmitter } from '@angular/core';
import Template from '../../models/template.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: ['./thumbnail-list.component.scss'],
})
export class ThumbnailListComponent {
  @Input() templates: Array<Template> = [];
  @Input() activeTemplate?: Template;
  @Output() onActiveTemplateChangeEvent: EventEmitter<Template> =
    new EventEmitter();
  baseURL = environment.baseURL;
  currentScroll: number = 0;

  // disable next button
  disableNext() {
    if (this.canMoveNext() === false) {
      return 'disabled';
    }
    return '';
  }

  // disable prev button
  disablePrev() {
    if (this.canMovePrev() === false) {
      return 'disabled';
    }
    return '';
  }
  // move forward the visible thumbnails by 4 positions
  moveNext() {
    if (this.canMoveNext()) {
      this.currentScroll = this.currentScroll + 4;
    }
  }

  // move backward the visible thumbnails by 4 positions
  movePrev() {
    if (this.canMovePrev()) {
      this.currentScroll = this.currentScroll - 4;
    }
  }

  // check if template exists after 4 positions
  canMoveNext() {
    if (this.templates[this.currentScroll + 4] === undefined) {
      return false;
    }
    return true;
  }

  // check if template exists before 4 positions
  canMovePrev() {
    if (this.templates[this.currentScroll - 4] === undefined) {
      return false;
    }
    return true;
  }

  // return visible thumbnails
  scrollTemplates() {
    return this.templates.slice(
      Number(this.currentScroll),
      this.currentScroll + 4
    );
  }

  // when thumbnail is clicked, change the active template
  updateTemplate(id: string) {
    let template = this.templates.filter((templateItem) => {
      return templateItem.id === id;
    });

    this.activeTemplate = template[0];
    this.onActiveTemplateChangeEvent?.emit(this.activeTemplate);
  }

  // Highlight the active thumbnail
  setActive(id: string) {
    if (this.activeTemplate?.id === id) {
      return 'active';
    }
    return '';
  }
}
