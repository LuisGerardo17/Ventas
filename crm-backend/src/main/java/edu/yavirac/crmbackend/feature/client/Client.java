package edu.yavirac.crmbackend.feature.client;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("clientes")
public class Client {
    
    @Id
    @Column("client_id")
    private long clientId;
    private String name;
     private String dni;
    private String phone;
    private String email;
    private boolean enable;
    private long acesorId;
    
    @MappedCollection(idColumn = "client_id")
    private Set<ClientProduct> products = new HashSet<>();
    private Date created;
    private Date updated;
}