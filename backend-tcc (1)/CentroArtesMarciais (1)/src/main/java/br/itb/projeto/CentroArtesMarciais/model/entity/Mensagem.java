package br.itb.projeto.CentroArtesMarciais.model.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "Mensagem")
public class Mensagem extends EntidadeBase {

	private LocalDateTime dataMensagem;
	private String emissorMensagem;
	private String email;
	private String telefone;
	private String texto;
	

	public LocalDateTime getDataMensagem() {
		return dataMensagem;
	}
	public void setDataMensagem(LocalDateTime dataMensagem) {
		this.dataMensagem = dataMensagem;
	}
	public String getEmissorMensagem() {
		return emissorMensagem;
	}
	public void setEmissorMensagem(String emissorMensagem) {
		this.emissorMensagem = emissorMensagem;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}

	
	
}
