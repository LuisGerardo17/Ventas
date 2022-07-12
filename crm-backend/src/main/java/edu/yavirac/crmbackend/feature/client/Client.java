package edu.yavirac.crmbackend.feature.client;

import java.security.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
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
    private Timestamp created;
    private Timestamp updated;
    private boolean enable;

}