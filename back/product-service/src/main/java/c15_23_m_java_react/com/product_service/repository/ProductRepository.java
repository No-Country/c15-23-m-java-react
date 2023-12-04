package c15_23_m_java_react.com.product_service.repository;

import c15_23_m_java_react.com.product_service.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
