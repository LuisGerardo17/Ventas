package edu.yavirac.crmbackend.feature.client;

import java.sql.Date;

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
    private Date created;
    private Date updated;
    private boolean enable;
    

}