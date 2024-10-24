package br.itb.projeto.CentroArtesMarciais.rest.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.itb.projeto.CentroArtesMarciais.model.entity.Mensagem;
import br.itb.projeto.CentroArtesMarciais.service.MensagemService;

@RestController
@RequestMapping("/mensagem/")
public class MensagemController extends ControllerBase<Mensagem> {

	private MensagemService mensagemService;

	public MensagemController(MensagemService mensagemService) {
		super(mensagemService);
		this.mensagemService = mensagemService;
		
	}


}






