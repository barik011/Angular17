import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexampComponent } from './forexamp.component';

describe('ForexampComponent', () => {
  let component: ForexampComponent;
  let fixture: ComponentFixture<ForexampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
