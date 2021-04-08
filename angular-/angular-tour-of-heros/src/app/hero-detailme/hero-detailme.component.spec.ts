import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailmeComponent } from './hero-detailme.component';

describe('HeroDetailmeComponent', () => {
  let component: HeroDetailmeComponent;
  let fixture: ComponentFixture<HeroDetailmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
