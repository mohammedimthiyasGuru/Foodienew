import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobMessageForgototpComponent } from './mob-message-forgototp.component';

describe('MobMessageForgototpComponent', () => {
  let component: MobMessageForgototpComponent;
  let fixture: ComponentFixture<MobMessageForgototpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobMessageForgototpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobMessageForgototpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
