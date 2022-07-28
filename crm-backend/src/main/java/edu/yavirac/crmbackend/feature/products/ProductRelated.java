package edu.yavirac.crmbackend.feature.products;

import org.springframework.data.annotation.Id;

import lombok.Data;
@Data
public class ProductRelated {
      
    @Id 
    private long id;
    private Long productoId;
    private Long productId;
}