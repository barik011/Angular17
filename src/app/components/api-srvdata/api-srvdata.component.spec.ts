import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSrvdataComponent } from './api-srvdata.component';

describe('ApiSrvdataComponent', () => {
  let component: ApiSrvdataComponent;
  let fixture: ComponentFixture<ApiSrvdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSrvdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiSrvdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
