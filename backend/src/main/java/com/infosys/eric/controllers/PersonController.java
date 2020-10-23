package com.infosys.eric.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.eric.models.Person;
import com.infosys.eric.services.PersonService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/")
public class PersonController {
	@Autowired PersonService ps;

	@GetMapping
	public List<Person> getAllPeople(){
		return ps.getAllPeople();
	}
	
	@GetMapping("/{id}")
	public Optional<Person> getPersonById(@PathVariable("id") int id) {
		return ps.getPersonById(id);
	}
	
	@PostMapping
	public void addPerson(Person p) {
		ps.addPerson(p);
	}
	
	@PutMapping
	public void updatePerson(Person p) {
		ps.updatePerson(p);
	}
	
	@DeleteMapping
	public void deletePerson(Person p) {
		ps.deletePerson(p);
	}
}
