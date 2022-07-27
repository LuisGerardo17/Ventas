package edu.yavirac.crmbackend.feature.products;


import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;


import lombok.Data;

@Data
@Table("products")
public class Product {
    @Id
    @Column("producto_id")
    private long productoId;
    private String name;
    private String descripcion;
    private String marca;
    private String modelo;
    private Long personId;
    private boolean enable;
    @MappedCollection(idColumn = "producto_id")
    private Set<ProductRelated> products = new HashSet<>();
    private Date created;
    private Date updated;
    public Product getId() {
        return null;
    }
}