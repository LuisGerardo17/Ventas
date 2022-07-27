package edu.yavirac.crmbackend.feature.person;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;



@RestController
@CrossOrigin({"*"})//indica un arreglo para pasar los datos
@RequestMapping("/api/persons")
public class PersonController {

  
  @Autowired
  PersonService personService;

  @GetMapping("/findAll")
  public List<Person> findAll(){
      return personService.findAll();
  }
  
    
}