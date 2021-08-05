import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import Template from './models/template.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'filmstrip-view-angular-client';
  templates: Array<Template> = [];
  activeTemplate?: Template;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.showTemplates();
  }
  setActiveTemplate(template: any) {
    this.activeTemplate = template;
  }

  showTemplates() {
    this.apiService.getTemplates().subscribe((data: Array<Template>) => {
      this.templates = data;
      this.activeTemplate = data[0];
    });
  }
}
