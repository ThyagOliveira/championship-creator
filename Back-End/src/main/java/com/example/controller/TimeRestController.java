package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.core.ApplicationServletRegistration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.JogadorDAO;
import com.example.dao.TimeDAO;
import com.example.model.Jogador;
import com.example.model.Time;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/time")
public class TimeRestController {

	@Autowired
	TimeDAO dao;

	@Autowired
	private JogadorDAO jogadorDao;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> listar() {

		Map<String, Object> retorno = new HashMap<String, Object>();

		try {
			List<Time> times = (List<Time>) dao.findAll();

			retorno.put("sucesso", true);
			retorno.put("retorno", times);

		} catch (Exception e) {
			retorno.put("sucesso", false);
			retorno.put("mensagem", "Falha ao criar time");
		}

		return retorno;
	}

	@RequestMapping(value = "criar", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String, Object> criar(@RequestBody Time time) {

		Map<String, Object> retorno = new HashMap<String, Object>();

		try {
			dao.save(time);
			retorno.put("sucesso", true);
			retorno.put("mensagem", "Time criado com sucesso!");

		} catch (Exception e) {
			retorno.put("sucesso", false);
			retorno.put("mensagem", "Falha ao criar time");
		}

		return retorno;
	}

	@RequestMapping(value = "atualizar/{nome}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String, Object> atualizar(@PathVariable("nome") String nome, @RequestBody Jogador jogador) {

		Map<String, Object> retorno = new HashMap<String, Object>();

		try {
			Time timeBuscado = dao.findByNome(nome);
			

			if (timeBuscado != null) {
				
				jogador.setTime(timeBuscado);
				
				jogadorDao.save(jogador);
			
				retorno.put("sucesso", true);
				retorno.put("mensagem", "Time atualizado com sucesso!");
			} else {
				retorno.put("sucesso", false);
				retorno.put("mensagem", "Time não encontrado!");
			}

		} catch (Exception e) {
			retorno.put("sucesso", false);
			retorno.put("mensagem", "Falha ao atualizar time");
		}

		return retorno;
	}

	@RequestMapping(value = "deletar/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String, Object> deletar(@PathVariable("id") Long id) {

		Map<String, Object> retorno = new HashMap<String, Object>();

		try {
			Time timeBuscado = dao.findOne(id);

			if (timeBuscado != null) {
				retorno.put("sucesso", true);
				retorno.put("mensagem", "Time deletado com sucesso!");
			} else {
				retorno.put("sucesso", false);
				retorno.put("mensagem", "Time não encontrado!");
			}

		} catch (Exception e) {
			retorno.put("sucesso", false);
			retorno.put("mensagem", "Falha ao deletar  time");
		}

		return retorno;
	}

}
