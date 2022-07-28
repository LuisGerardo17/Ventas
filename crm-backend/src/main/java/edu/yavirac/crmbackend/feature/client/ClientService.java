package edu.yavirac.crmbackend.feature.client;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    //Create
    public Client save(Client client){
        return clientRepository.save(client);
    }

    //Read
    public Client findById(long id){
        return clientRepository.findById(id).orElse(new Client());
    }

    //Update = Create

    //Delete
    public void deleteById(long id){
        clientRepository.deleteById(id);
    }

    //todos los registros
    public List<Client> getClientsfindAll(){
        return clientRepository.findAll();
    }

    public  List<Client> findAll(){
        return clientRepository.findAll();
    }

    public List<Client> findByName(String term){
        return clientRepository.findByNameLikeIgnoreCase(term);
    }
    
}
