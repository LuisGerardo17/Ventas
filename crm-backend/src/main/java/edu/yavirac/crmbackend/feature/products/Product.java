package edu.yavirac.crmbackend.feature.products;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
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
    private String nombre;
    private String imagen;
    private Date created;
    private Date updated;
    private Boolean enable;
}
