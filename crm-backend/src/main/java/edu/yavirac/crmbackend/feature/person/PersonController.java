package edu.yavirac.crmbackend.feature.person;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin({"*"})//indica un arreglo para pasar los datos
@RequestMapping("/api/person")
public class PersonController {

  
  @Autowired
  PersonService personService;

  @GetMapping("/findAll")
  public List<Person> findAll(){
      return personService.findAll();
  }
  
    
}
