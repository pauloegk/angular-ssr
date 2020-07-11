import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private metaTagService: Meta) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Loja do pupilinho, pupilo digital, cafe do pupilo' },
      { name: 'description', content: 'Loja do pupileti boa de fazer um cafezão, e o paulo ta junto' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pupileti Paulera' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

}
