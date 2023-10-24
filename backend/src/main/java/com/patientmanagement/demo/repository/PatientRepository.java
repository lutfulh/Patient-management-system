package com.patientmanagement.demo.repository;

import com.patientmanagement.demo.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;


    public interface PatientRepository extends JpaRepository<Patient, Long> {

    }

