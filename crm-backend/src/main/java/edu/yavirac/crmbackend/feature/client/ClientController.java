package edu.yavirac.crmbackend.feature.client;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
public class ClientController {

    @Autowired
    ClientService clientService;

    @PostMapping("/save")
    public Client save(@RequestBody Client client){
        return clientService.save(client);
    }

    @GetMapping("/{id}")
    public Client findById(@PathVariable long id){
        return clientService.findById(id);
    }

    @PutMapping("/update")
    public Client update(@RequestBody Client client){
        return clientService.save(client);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable long id)
    {
        clientService.deleteById(id);
    }

    @GetMapping("/all")
    public List<Client> findAll(){
        return clientService.findAll();
    }
    
    
}