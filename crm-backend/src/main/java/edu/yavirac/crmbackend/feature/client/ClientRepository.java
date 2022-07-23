package edu.yavirac.crmbackend.feature.client;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client , Long> {
    
    List<Client> findAll();
    List<Client> findByNameLikeIgnoreCase(String term);

}