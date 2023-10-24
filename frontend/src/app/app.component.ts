import { Component, OnInit } from '@angular/core';
import { PatientService } from './services/patient.service';
import { Patient } from './models/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Patient Application';
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
      data => {
        console.log(data);
        this.patients = data;
      },
      error => console.error(error)
    );
  }
  
}
