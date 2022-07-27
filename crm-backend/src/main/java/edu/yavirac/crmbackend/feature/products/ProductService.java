package edu.yavirac.crmbackend.feature.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    //Create
    public Product save (Product product) {
      return productRepository.save(product);
    }

    //Read
    public Product findById (long id) {
        return productRepository.findById(id).orElse(new Product());
    }
     //Update=Create

     public void deleteById (long id){
        productRepository.deleteById(id);
     }
     

     //Para todos los registros
     public List<Product> getProductsfindAll(){
      return productRepository.findAll();

     }

     public List<Product> findAll(){
        return productRepository.findAll();
     }

     
    public List<Product> findByName(String term){
      return productRepository.findByNameLikeIgnoreCase(term);
  }
}
