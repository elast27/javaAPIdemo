package com.infosys.eric.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.eric.models.Person;
import com.infosys.eric.repositories.PersonRepository;

@Service
public class PersonService {
	@Autowired PersonRepository pr;
	
	public List<Person> getAllPeople(){
		return pr.findAll();
	}
	
	public Optional<Person> getPersonById(int id) {
		return pr.findById(id);
	}
	
	public void addPerson(Person p) {
		pr.save(p);
	}
	
	public void updatePerson(Person p) {
		pr.save(p);
	}
	
	public void deletePerson(Person p) {
		pr.delete(p);
	}
}
