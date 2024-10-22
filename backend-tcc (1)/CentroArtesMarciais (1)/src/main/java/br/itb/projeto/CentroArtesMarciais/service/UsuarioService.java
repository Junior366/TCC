package br.itb.projeto.CentroArtesMarciais.service;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.CentroArtesMarciais.model.entity.Usuario;
import br.itb.projeto.CentroArtesMarciais.model.repository.UsuarioRepository;
import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

	private UsuarioRepository usuarioRepository;

	// Source -> Generate Constructor using Fields...
	public UsuarioService(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}

	public List<Usuario> findAll() {
		List<Usuario> usuarios = usuarioRepository.findAll();

		return usuarios;
	}

	public Usuario findById(long id) {
		Usuario usuario = 
				usuarioRepository
				.findById(id).orElseThrow();

		return usuario;
	}
	
	public Usuario findByEmail(String email) {
		Usuario usuario = 
				usuarioRepository.findByEmail(email);

		return usuario;
	}
	
	@Transactional
	public Usuario create(Usuario usuario) {
		
		String senha = Base64.getEncoder()
			.encodeToString(usuario.getSenha().getBytes());
		
		usuario.setSenha(senha);
		if (usuario.getNivelAcesso() == null) usuario.setNivelAcesso("USER");
		usuario.setStatus("ATIVO");
		
		return usuarioRepository.save(usuario);
	}
	
	@Transactional
	public Usuario signin(String email, String senha) {
	 Usuario usuario = usuarioRepository.findByEmail(email);
		
	 if(usuario != null) {
		if (!usuario.getStatus().equals("INATIVO")) {
			byte[] decodedPass = Base64.getDecoder()
								.decode(usuario.getSenha());
			if (new String(decodedPass).equals(senha)) {
				return usuario;
			}
		}
	 }
		return null;
	}
	
	@Transactional
	public Usuario inativar(long id) {
		Optional<Usuario> _usuario = 
				usuarioRepository.findById(id);
		
		if (_usuario.isPresent()) {
			Usuario usuarioAtualizada = _usuario.get();
			usuarioAtualizada.setStatus("INATIVO");
			
			return usuarioRepository.save(usuarioAtualizada);
		}
		return null;
	}
	
	@Transactional
	public Usuario reativar(long id) {
		Optional<Usuario> _usuario = 
				usuarioRepository.findById(id);
		
		if (_usuario.isPresent()) {
			Usuario usuarioAtualizado = _usuario.get();
			String senha = Base64.getEncoder()
					.encodeToString("12345678".getBytes());
				
			usuarioAtualizado.setSenha(senha);
			usuarioAtualizado.setStatus("ATIVO");
			
			return usuarioRepository.save(usuarioAtualizado);
		}
		return null;
	}
	
	@Transactional
	public Usuario alterarSenha(long id, Usuario usuario) {
		Optional<Usuario> _usuario = 
				usuarioRepository.findById(id);
		
		if (_usuario.isPresent()) {
			Usuario usuarioAtualizado = _usuario.get();
			String senha = Base64.getEncoder()
					.encodeToString(usuario.getSenha().getBytes());
				
			usuarioAtualizado.setSenha(senha);
			usuarioAtualizado.setStatus("ATIVO");
			
			return usuarioRepository.save(usuarioAtualizado);
		}
		return null;
	}
	
	
}





