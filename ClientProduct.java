package edu.yavirac.crmbackend.feature.client;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("client_producto")
public class ClientProduct {
    
    @Id
    private long id;
    private Long clientId;
    private Long productoId;

}
