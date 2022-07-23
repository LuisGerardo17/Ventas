package edu.yavirac.crmbackend.feature.acesor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/acesor")
public class AcesorController {
  
@Autowired
 AcesorService acesorService;
 //Create
@PostMapping("/save")
public Acesor save(@RequestBody Acesor acesor){
      return acesorService.save(acesor);
}

//Read
@GetMapping("/{id}")
public Acesor findById(@PathVariable long id){
    return acesorService.findById(id);
}
//Update
@PutMapping("/update")
public Acesor update (@RequestBody Acesor  acesor){
    return acesorService.save(acesor);
}

//Delete
@DeleteMapping("/delete/{id}")
public void  deleteById (@PathVariable long id){
     acesorService.deleteById(id);
}

//para mostrar todos los registros 
@GetMapping("/findAll")
  public List findAll(){
      return acesorService.findAll();
 }

 
 @GetMapping("/findByName/{term}")
 public List<Acesor> findByName(@PathVariable String term){
     return acesorService.findByName(term+"%");
 }

}
