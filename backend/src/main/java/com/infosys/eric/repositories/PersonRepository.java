package com.infosys.eric.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infosys.eric.models.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer>{

}
