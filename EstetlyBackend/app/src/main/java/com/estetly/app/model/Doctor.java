package com.estetly.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {
    @Id
    private String id;
    private String picture;
    private String firstName;
    private String lastName;
    private String spokenLanguages;
    private boolean verified;
    private String speciality;
    private String officeName;
    private String numAssoSynd;
}
