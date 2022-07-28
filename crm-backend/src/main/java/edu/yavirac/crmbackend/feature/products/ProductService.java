package edu.yavirac.crmbackend.feature.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    
    @Autowired
    ProductRepository productRepository;

    //CREATE
    public Product save(Product product){
        return productRepository.save(product);
    }

    //READ
    public Product findById(Long id){
        return productRepository.findById(id).orElse(new Product());
    }

//UPDATE = CREATE

//DELETE
public void deleteById(Long id){
    productRepository.deleteById(id);
}

public List<Product> findAll(){
    return productRepository.findAll();
}
}

