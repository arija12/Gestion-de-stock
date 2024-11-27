import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonDeuxiemeComposantComponent } from './mon-deuxieme-composant.component';

describe('MonDeuxiemeComposantComponent', () => {
  let component: MonDeuxiemeComposantComponent;
  let fixture: ComponentFixture<MonDeuxiemeComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonDeuxiemeComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonDeuxiemeComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
