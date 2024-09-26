package com.estetly.app.controller;

import com.estetly.app.model.Doctor;
import com.estetly.app.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/doctors")
public class DoctorController {

    @Autowired
    private DoctorService service;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Doctor createDoctor(@RequestBody Doctor doctor){
        return service.addDoctor(doctor);
    }

    @GetMapping
    public List<Doctor> getDoctors(){
        return service.findAllDoctors();
    }

    @GetMapping("/{doctorId}")
    public Doctor getDoctor(@PathVariable String doctorId){
        return service.getDoctorById(doctorId);
    }

    @GetMapping("/speciality/{speciality}")
    public List<Doctor> findDoctorUsingSeverity(@PathVariable String speciality){
        return service.getDoctorBySpeciality(speciality);
    }

    @PutMapping
    public Doctor modifyDoctor(@RequestBody Doctor doctor){
        return service.updateDoctor(doctor);
    }

    @DeleteMapping("/{doctorId}")
    public String deleteDoctor(@PathVariable String doctorId){
        return service.deleteDoctor(doctorId);
    }
}
