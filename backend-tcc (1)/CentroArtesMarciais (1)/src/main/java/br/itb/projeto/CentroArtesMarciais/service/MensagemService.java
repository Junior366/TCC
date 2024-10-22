package br.itb.projeto.CentroArtesMarciais.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.CentroArtesMarciais.model.entity.Mensagem;
import br.itb.projeto.CentroArtesMarciais.model.repository.MensagemRepository;
import jakarta.transaction.Transactional;


@Service
public class MensagemService extends ServiceBase<Mensagem> {

	private MensagemRepository mensagemRepository;

	public MensagemService(MensagemRepository mensagemRepository) {
		super(mensagemRepository);
		this.mensagemRepository = mensagemRepository;
	}
	
	//jakarta.transaction.Transactional
	@Transactional
	@Override
	public Mensagem create(Mensagem mensagem) {
		
		mensagem.setDataMensagem(LocalDateTime.now()); 
	
		
		return super.create(mensagem);
	}
	
	@Transactional
	@Override
	public Mensagem update(long id) {
		//java.util.Optional
		Optional<Mensagem> _mensagem = 
				mensagemRepository.findById(id);
		
		if (_mensagem.isPresent()) {
			Mensagem mensagemAtualizada = _mensagem.get();
			mensagemAtualizada.setStatus("LIDA");
			
			return mensagemRepository.save(mensagemAtualizada);
		}
		return null;
	}
	
}












