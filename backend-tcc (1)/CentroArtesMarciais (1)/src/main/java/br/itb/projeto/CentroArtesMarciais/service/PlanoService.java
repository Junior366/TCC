package br.itb.projeto.CentroArtesMarciais.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.CentroArtesMarciais.model.entity.Plano;
import br.itb.projeto.CentroArtesMarciais.model.repository.PlanoRepository;
import jakarta.transaction.Transactional;

@Service
public class PlanoService extends ServiceBase<Plano> {
	private PlanoRepository planoRepository;

	public PlanoService(PlanoRepository planoRepository) {
		super(planoRepository);
		this.planoRepository = planoRepository;
	}

	
	@Transactional
	public Plano reativar(long id) {
		Optional<Plano> _plano = 
				planoRepository.findById(id);
		
		if (_plano.isPresent()) {
			Plano planoAtualizado = _plano.get();
			planoAtualizado.setStatus("ATIVO");
			
			return planoRepository.save(planoAtualizado);
		}
		return null;
 }
}