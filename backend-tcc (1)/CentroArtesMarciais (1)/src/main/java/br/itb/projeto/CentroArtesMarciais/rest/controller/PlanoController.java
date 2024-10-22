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

import br.itb.projeto.CentroArtesMarciais.model.entity.Plano;
import br.itb.projeto.CentroArtesMarciais.service.PlanoService;

@RestController
@RequestMapping("/Plano/")
public class PlanoController {

	private PlanoService planoService;

	public PlanoController(PlanoService planoService) {
		super();
		this.planoService = planoService;
	}
	@GetMapping("findAll")
	public ResponseEntity<List<Plano>> findAll() {
		List<Plano> planos = planoService.findAll();

		return new ResponseEntity<List<Plano>>(planos, HttpStatus.OK);
}
	
	@GetMapping("findById/{id}")
	public ResponseEntity<Plano> findById(@PathVariable long id) {
		Plano plano = planoService.findById(id);

		return new ResponseEntity<Plano>(plano, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Plano> create(@RequestBody Plano plano) {

		Plano _plano = planoService.create(plano);

		return new ResponseEntity<Plano>(_plano, HttpStatus.OK);
	}
	
	@PutMapping("inativar/{id}")
	public ResponseEntity<Plano> inativar(@PathVariable long id) {

		Plano plano = planoService.inativar(id);

		return new ResponseEntity<Plano>(plano, HttpStatus.OK);
	}

	@PutMapping("reativar/{id}")
	public ResponseEntity<Plano> reativar(@PathVariable long id) {

		Plano plano = planoService.reativar(id);

		return new ResponseEntity<Plano>(plano, HttpStatus.OK);
	}
}

