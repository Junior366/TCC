package br.itb.projeto.CentroArtesMarciais.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;

import br.itb.projeto.CentroArtesMarciais.model.entity.EntidadeBase;
import br.itb.projeto.CentroArtesMarciais.model.entity.Mensagem;
import br.itb.projeto.CentroArtesMarciais.model.repository.MensagemRepository;
import br.itb.projeto.CentroArtesMarciais.model.repository.RepositoryBase;
public class ServiceBase<Entidade extends EntidadeBase> {
	private RepositoryBase<Entidade> repository;

	public ServiceBase(RepositoryBase<Entidade> mensagemRepository) {
		super();
		this.repository = mensagemRepository;
	}
	
	public List<Entidade> findAll(){
		List<Entidade> mensagems = repository.findAll();
		return mensagems;
	}
	
	public Entidade findById(long id) {
		Entidade mensagem = 
				repository
				.findById(id).orElseThrow();

		return mensagem;
	}
	
	//jakarta.transaction.Transactional
	@Transactional
	public Entidade create(Entidade mensagem) {
		
	
		
		return repository.save(mensagem);
	}
	
	@Transactional
	public Entidade update(long id) {
		//java.util.Optional
		Optional<Entidade> _mensagem = 
			repository.findById(id);
		
		if (_mensagem.isPresent()) {
			Entidade mensagemAtualizada = _mensagem.get();
			mensagemAtualizada.setStatus("LIDA");
			
			return repository.save(mensagemAtualizada);
		}
		return null;
	}
	
	@Transactional
	public Entidade inativar(long id) {
		Optional<Entidade> _mensagem = 
				repository.findById(id);
		
		if (_mensagem.isPresent()) {
			Entidade mensagemAtualizada = _mensagem.get();
			mensagemAtualizada.setStatus("INATIVO");
			
			return repository.save(mensagemAtualizada);
		}
		return null;
	}
}
