package br.itb.projeto.CentroArtesMarciais.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import br.itb.projeto.CentroArtesMarciais.model.entity.EntidadeBase;

@NoRepositoryBean
public interface RepositoryBase<Entidade extends EntidadeBase> extends JpaRepository<Entidade, Long> {
	List<Entidade> findAllByStatus(String status);
}
