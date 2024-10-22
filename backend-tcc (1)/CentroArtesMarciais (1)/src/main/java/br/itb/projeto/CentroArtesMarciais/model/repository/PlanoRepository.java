package br.itb.projeto.CentroArtesMarciais.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.itb.projeto.CentroArtesMarciais.model.entity.Plano;

@Repository
public interface PlanoRepository extends RepositoryBase<Plano>{

}
