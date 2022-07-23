package edu.yavirac.crmbackend.feature.person;
import java.util.List;

//logica del negocio
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class PersonService {
  
  @Autowired
  PersonRepository personRepository;

  public List<Person> findAll(){
      return personRepository.findAll();
  }
}