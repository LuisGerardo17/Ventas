package edu.yavirac.crmbackend.feature.equipo;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("equipos")
public class Equipo {
    
    @Id private long id;
    private String nombre;
}