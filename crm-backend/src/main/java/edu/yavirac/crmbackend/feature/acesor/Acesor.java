package edu.yavirac.crmbackend.feature.acesor;


import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
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
    private Long personId;
    private boolean enabled;
    @MappedCollection(idColumn = "acesor_id")
    private Set<AcesorClient> clients = new HashSet<>();
    private Date created;
    private Date updated;
}
