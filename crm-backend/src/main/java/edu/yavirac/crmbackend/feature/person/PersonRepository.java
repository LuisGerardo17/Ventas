package edu.yavirac.crmbackend.feature.person;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository <Person,Long> {
    List<Person> findAll();  //para traer todos los registros usando listas
}