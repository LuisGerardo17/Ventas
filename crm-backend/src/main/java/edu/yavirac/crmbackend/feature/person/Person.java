package edu.yavirac.crmbackend.feature.person;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data //getering seteres
@Table("persons")
public class Person {
    @Id //Para la pk
    private long id;
    private String name;
    
}
