import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesIconsComponent } from './articles-icons.component';

describe('ArticlesIconsComponent', () => {
  let component: ArticlesIconsComponent;
  let fixture: ComponentFixture<ArticlesIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
