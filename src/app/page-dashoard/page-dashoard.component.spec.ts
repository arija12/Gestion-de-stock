import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashoardComponent } from './page-dashoard.component';

describe('PageDashoardComponent', () => {
  let component: PageDashoardComponent;
  let fixture: ComponentFixture<PageDashoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDashoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
