package edu.yavirac.crmbackend.feature.products;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
     
    List<Product> findAll();
    
}
