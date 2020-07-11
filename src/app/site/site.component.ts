import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  title = 'angular-ssr';
  constructor(private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Site do pupilinho, pupilo site quaqua' },
      { name: 'description', content: 'Site do pupileti pra catalogos' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pupileti Paulera' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

}
