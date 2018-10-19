import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeywordsAndSourcesComponent } from './add-keywords-and-sources.component';

describe('AddKeywordsAndSourcesComponent', () => {
  let component: AddKeywordsAndSourcesComponent;
  let fixture: ComponentFixture<AddKeywordsAndSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKeywordsAndSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeywordsAndSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
