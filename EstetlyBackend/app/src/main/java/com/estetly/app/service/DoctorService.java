package com.estetly.app.service;

import com.estetly.app.model.Doctor;
import com.estetly.app.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository repository;

    //CRUD : CREATE, READ, UPDATE, DELETE

    public Doctor addDoctor(Doctor doctor){
        doctor.setId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(doctor);
    }

    public List<Doctor> findAllDoctors(){
        return repository.findAll();
    }

    public Doctor getDoctorById(String id){
        return repository.findById(id).get();
    }

    public List<Doctor> getDoctorBySpeciality(String speciality){
        return  repository.findBySpeciality(speciality);
    }

    public Doctor updateDoctor(Doctor doctorRequest){
        //get the existing document from DB
        // populate new value from request to existing object/entity/document
        Doctor existingDoctor = repository.findById(doctorRequest.getId()).get();
        existingDoctor.setFirstName(doctorRequest.getFirstName());
        existingDoctor.setLastName(doctorRequest.getLastName());
        existingDoctor.setPicture(doctorRequest.getPicture());
        existingDoctor.setSpeciality(doctorRequest.getSpeciality());
        existingDoctor.setSpokenLanguages(doctorRequest.getSpokenLanguages());
        existingDoctor.setVerified(doctorRequest.isVerified());
        existingDoctor.setOfficeName(doctorRequest.getOfficeName());
        existingDoctor.setNumAssoSynd(doctorRequest.getNumAssoSynd());

        return repository.save(existingDoctor);
    }

    public String deleteDoctor(String doctorId){
        repository.deleteById(doctorId);
        return doctorId+" : this doctor is deleted succesfully";
    }
}
