import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../assets/global/plugins/font-awesome/css/font-awesome.min.css',
    '../assets/global/plugins/simple-line-icons/simple-line-icons.min.css',
    '../assets/global/plugins/bootstrap/css/bootstrap.min.css',
    '../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
    "../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css",
    "../assets/global/plugins/morris/morris.css",
    "../assets/global/plugins/fullcalendar/fullcalendar.min.css",
    "../assets/global/plugins/jqvmap/jqvmap/jqvmap.css",
    "../assets/global/css/components.min.css",
    "../assets/global/css/plugins.min.css",
    "../assets/layouts/layout5/css/layout.min.css",
    "../assets/layouts/layout5/css/custom.min.css",
  ]
})
export class AppComponent {
  title = 'app works';
}
