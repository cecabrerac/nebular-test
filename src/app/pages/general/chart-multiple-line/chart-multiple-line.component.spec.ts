import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMultipleLineComponent } from './chart-multiple-line.component';

describe('ChartMultipleLineComponent', () => {
  let component: ChartMultipleLineComponent;
  let fixture: ComponentFixture<ChartMultipleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMultipleLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMultipleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
