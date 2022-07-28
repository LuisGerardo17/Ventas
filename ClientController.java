package edu.yavirac.crmbackend.feature.client;

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
@RequestMapping("/api/client")
@CrossOrigin({"*"})
public class ClientController {

    @Autowired
    ClientService clientService;

    //create
    @PostMapping("/save")
    public Client save(@RequestBody Client client){
        return clientService.save(client);
    }

    //read
    @GetMapping("/{clientId}")
    public Client findById(@PathVariable long clientId){
        return clientService.findById(clientId);
    }

    //update
    @PutMapping("/update")
    public Client update(@RequestBody Client client){
        return clientService.save(client);
    }

    //delete
    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable long clientId){
        clientService.deleteById(clientId);
    }

    //mostrar todos los registros
    @GetMapping("/findAll")
    public List<Client> findAll(){
        return clientService.findAll();
    }
    
    @GetMapping("/findByName/{term}")
    public List<Client> findByName(@PathVariable String term){
        return clientService.findByName(term+"%");
 }
    
    
}