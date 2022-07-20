package edu.yavirac.crmbackend.feature.acesor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AcesorService {
    @Autowired
    AcesorRepository acesorRepository;

    //Create
    public Acesor save (Acesor acesor) {
      return acesorRepository.save(acesor);
    }

    //Read
    public Acesor findById (long id) {
        return acesorRepository.findById(id).orElse(new Acesor());
    }
     //Update=Create

     public void deleteById (long id){
        acesorRepository.deleteById(id);
     }
     

     //Para todos los registros
     public List<Acesor> getAcesoresfindAll(){
      return acesorRepository.findAll();

     }

     public List<Acesor> findAll(){
        return acesorRepository.findAll();
     }

     
    public List<Acesor> findByName(String term){
      return acesorRepository.findByNameLikeIgnoreCase(term);
  }
}
