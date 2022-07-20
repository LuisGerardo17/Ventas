package edu.yavirac.crmbackend.feature.acesor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface AcesorRepository extends CrudRepository<Acesor,Long> {
     List<Acesor> findAll();// para traer todos los registros de acesores
     List<Acesor> findByNameLikeIgnoreCase(String term);
}
