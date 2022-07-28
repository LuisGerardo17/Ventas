package edu.yavirac.crmbackend.feature.client;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client , Long> {
    List<Client> findAll(); //extraer todos los registros de clientes
    List<Client> findByNameLikeIgnoreCase(String term);
}
