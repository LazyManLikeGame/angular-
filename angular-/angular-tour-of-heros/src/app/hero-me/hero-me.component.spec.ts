import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMeComponent } from './hero-me.component';

describe('HeroMeComponent', () => {
  let component: HeroMeComponent;
  let fixture: ComponentFixture<HeroMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
