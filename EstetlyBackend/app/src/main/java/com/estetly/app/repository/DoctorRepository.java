package com.estetly.app.repository;

import com.estetly.app.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DoctorRepository extends MongoRepository<Doctor, String> {
    List<Doctor> findBySpeciality(String speciality);
}
