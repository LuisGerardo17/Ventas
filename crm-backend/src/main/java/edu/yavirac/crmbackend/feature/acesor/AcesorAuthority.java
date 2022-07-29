package edu.yavirac.crmbackend.feature.acesor;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class AcesorAuthority {
    
    @Id 
    private Long id;
    private Long acesorId;
    private Long authorityId;

}