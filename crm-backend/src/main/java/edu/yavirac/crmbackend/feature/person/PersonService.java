package edu.yavirac.crmbackend.feature.person;
import java.util.List;

//logica del negocio
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class PersonService {
  
    @Autowired
    PersonRepository personRepository;//tipo objeto
    //Create
      public Person save(Person person) {
        return personRepository.save(person);
      }
// Read
      public Person findById(long id){ 

       return  personRepository.findById(id).orElse(new Person());// me pregunta que obtener
    }

    //Update = Create (Motodo PUT)

//Delete
     public void deleteById(long id) {
       personRepository.findById(id);  //No retorna nada

    }

     public List<Person> findAll(){
     return personRepository.findAll();

}
}