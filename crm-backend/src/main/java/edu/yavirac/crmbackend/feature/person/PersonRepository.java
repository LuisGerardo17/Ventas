package edu.yavirac.crmbackend.feature.person;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person , Long> {
    List<Person> findAll(); //extraer todos los registros de clientes
    List<Person> findByNameLikeIgnoreCase(String term);

}

