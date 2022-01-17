import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YummypayhistorylistComponent } from './yummypayhistorylist.component';

describe('YummypayhistorylistComponent', () => {
  let component: YummypayhistorylistComponent;
  let fixture: ComponentFixture<YummypayhistorylistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YummypayhistorylistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YummypayhistorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
