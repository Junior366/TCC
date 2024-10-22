package br.itb.projeto.CentroArtesMarciais.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.itb.projeto.CentroArtesMarciais.model.entity.Usuario;

@Repository
public interface UsuarioRepository extends RepositoryBase<Usuario> {

	Usuario findByEmail(String email);

}
