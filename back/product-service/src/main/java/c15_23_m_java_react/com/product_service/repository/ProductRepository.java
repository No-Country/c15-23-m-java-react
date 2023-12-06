package c15_23_m_java_react.com.product_service.repository;

import c15_23_m_java_react.com.product_service.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT p FROM Product p WHERE p.name LIKE %?1%")
    List<Product> findProductsByName(String name);
}
