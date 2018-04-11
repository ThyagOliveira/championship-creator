package com.example.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Jogador;
import com.example.model.Time;
import com.example.model.User;

@Repository
public interface JogadorDAO extends CrudRepository<Jogador,Long>{

	
}
