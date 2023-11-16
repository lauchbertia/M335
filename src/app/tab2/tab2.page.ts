import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ExploreContainerComponent, IonicModule, CommonModule]
})
export class Tab2Page {

  constructor() {}
  deviceInfo: any;
  batteryInfo: any;

  logDeviceInfos = async () => {
    const info = await Device.getInfo();
    this.deviceInfo = await Device.getInfo();
    console.log(info);
  };

  logBatteryInfo = async () => {
    const info = await Device.getInfo();
    this.batteryInfo = await Device.getBatteryInfo();
    console.log(info);
  };
  

   async logDeviceInfo() {
    const info = await Device.getInfo();
  
    console.log(info);
  };
  

}
