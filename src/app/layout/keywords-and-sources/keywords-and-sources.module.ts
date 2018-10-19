import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsAndSourcesComponent } from './keywords-and-sources.component';
import {
  AddKeywordsAndSourcesComponent
} from './add-keywords-and-sources/add-keywords-and-sources.component';
import { PopularSourcesListComponent } from './popular-sources-list/popular-sources-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KeywordsAndSourcesComponent,
    AddKeywordsAndSourcesComponent,
    PopularSourcesListComponent
  ],
  exports: [
    KeywordsAndSourcesComponent,
    AddKeywordsAndSourcesComponent
  ]
})
export class KeywordsAndSourcesModule { }
