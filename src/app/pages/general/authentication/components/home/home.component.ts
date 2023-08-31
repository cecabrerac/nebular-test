import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service/login-service.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tfa: any = {};
  authcode: string = '';
  errorMessage: string = null;

  deviceInfo: any = {};
  device: string = '';

  constructor(
    private _loginService: LoginServiceService,
    private deviceService: DeviceDetectorService
  ) {
    this.getAuthDetails();
  }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    if (this.deviceService.isMobile()) this.device = 'Mobile';
    if (this.deviceService.isTablet()) this.device = 'Tablet';
    if (this.deviceService.isDesktop()) this.device = 'Desktop';

    console.log('device info: ', this.deviceService.getDeviceInfo());
  }

  getAuthDetails() {
    this._loginService.getAuth().subscribe((data) => {
      const result = data.body;
      if (data['status'] === 200) {
        console.log(result);
        if (result == null) {
          this.setup();
        } else {
          this.tfa = result;
        }
      }
    });
  }

  setup() {
    this._loginService.setupAuth().subscribe((data) => {
      const result = data.body;
      if (data['status'] === 200) {
        console.log(result);
        this.tfa = result;
      }
    });
  }

  confirm() {
    this._loginService.verifyAuth(this.authcode).subscribe((data) => {
      const result = data.body;
      if (result['status'] === 200) {
        console.log(result);
        this.errorMessage = null;
        this.tfa.secret = this.tfa.tempSecret;
        this.tfa.tempSecret = '';
      } else {
        this.errorMessage = result['message'];
      }
    });
  }

  disabledTfa() {
    this._loginService.deleteAuth().subscribe((data) => {
      const result = data.body;
      if (data['status'] === 200) {
        console.log(result);
        this.authcode = '';
        this.getAuthDetails();
      }
    });
  }
}
