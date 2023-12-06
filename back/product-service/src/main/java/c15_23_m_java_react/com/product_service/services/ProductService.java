package c15_23_m_java_react.com.product_service.services;

import c15_23_m_java_react.com.product_service.entities.Product;
import c15_23_m_java_react.com.product_service.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public ResponseEntity<Product> createNewProduct(Product product) {
        try {
            productRepository.save(product);
            return new ResponseEntity<>(product, HttpStatus.CREATED);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Product>> getAllProducts() {
        try {
            List<Product> allProducts = productRepository.findAll();
            return new ResponseEntity<>(allProducts, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Product> getProductById(Long id) {
        try{

            Product productFound = productRepository.findById(id).get();
            return new ResponseEntity<>(productFound, HttpStatus.FOUND);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Product>> getProductsByName(String name) {
        try {
            List<Product> productsFound = productRepository.findProductsByName(name);
            return new ResponseEntity<>(productsFound, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
