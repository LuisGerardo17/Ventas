package edu.yavirac.crmbackend.auth;

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
@RequestMapping("/api/authority")
@CrossOrigin({"*"})
public class AuthorityController {
    @Autowired
    AuthorityService authorityService;

    //create
    @PostMapping("/save")
    public Authority save(@RequestBody Authority authority){
        return authorityService.save(authority);
    }
    //read
    @GetMapping("/findById/{id}")
    public Authority findById(@PathVariable long id){
        return authorityService.findById(id);
    }
    //update
    @PutMapping("/update")
    public Authority update(@RequestBody Authority authority){
        return authorityService.save(authority);
    }
        
    //Delete
    @DeleteMapping("/deleteById/{id}")
     public void deleteById (@PathVariable long id){
        authorityService.deleteById(id);
    }

    @GetMapping("/all")
    public List<Authority> findAll(){
        return authorityService.findAll();
    }
    

    @GetMapping("/findByName/{term}")
    public List<Authority> findByName(@PathVariable String term){
        System.out.println("Backend:"+term);
        return authorityService.findByName(term);
    }
    
}


