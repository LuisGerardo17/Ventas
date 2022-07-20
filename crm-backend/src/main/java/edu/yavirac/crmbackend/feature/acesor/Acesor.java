package edu.yavirac.crmbackend.feature.acesor;


import java.sql.Date;


import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


import lombok.Data;

@Data
@Table("acesores")
public class Acesor {
    @Id
    @Column("acesor_id")
    private long acesorId;
    private String nombre;
    private String telefono;
    private String email;
    private String equipoid;
    private boolean enabled;
    private Date created;
    private Date updated;
}
