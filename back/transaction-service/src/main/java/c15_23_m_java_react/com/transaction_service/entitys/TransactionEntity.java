
package c15_23_m_java_react.com.transaction_service.entitys;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "transactions")
public class TransactionEntity {
	
	@Id
	private Long id;

	@NotBlank
	private Long usruaio_id;

	@NotBlank
	private Producto producto;

	@NotBlank
	private Double montoTotal;
	
	@NotBlank
	private Double impuestos;
	
	@NotBlank
	private Double montoDescontado;
	
	@NotBlank
	@Temporal(TemporalType.DATE)
	private Date fecha;
	
	private Boolean estado;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUsruaio_id() {
		return usruaio_id;
	}

	public void setUsruaio_id(Long usruaio_id) {
		this.usruaio_id = usruaio_id;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public Double getMontoTotal() {
		return montoTotal;
	}

	public void setMontoTotal(Double montoTotal) {
		this.montoTotal = montoTotal;
	}

	public Double getImpuestos() {
		return impuestos;
	}

	public void setImpuestos(Double impuestos) {
		this.impuestos = impuestos;
	}

	public Double getMontoDescontado() {
		return montoDescontado;
	}

	public void setMontoDescontado(Double montoDescontado) {
		this.montoDescontado = montoDescontado;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Boolean getEstado() {
		return estado;
	}

	public void setEstado(Boolean estado) {
		this.estado = estado;
	}
	
	
	
}
