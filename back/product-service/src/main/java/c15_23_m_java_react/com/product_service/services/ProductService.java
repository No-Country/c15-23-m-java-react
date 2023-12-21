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
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            return new ResponseEntity<>(productOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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

    public ResponseEntity<List<Product>> getProductsByCategory(String category) {
        try {
            List<Product> productsFound = productRepository.findProductsByCategory(category);
            return new ResponseEntity<>(productsFound, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Product>> getStockedProducts() {
        try {
            List<Product> productsFound = productRepository.getStockedProducts();
            return new ResponseEntity<>(productsFound, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<List<Product>> getActiveProducts() {
        try {
            List<Product> productsFound = productRepository.getActiveProducts();
            return new ResponseEntity<>(productsFound, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Product> updateOneProduct(Long id, Product newProductData) {
        try {
            Optional<Product> productsFound = productRepository.findById(id);
            if (!productsFound.isPresent()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            //Actualizar cada campo del producto
            Product updatedProduct = productsFound.get();
            updatedProduct.setName(newProductData.getName());
            updatedProduct.setBrand(newProductData.getBrand());
            updatedProduct.setDescription(newProductData.getDescription());
            updatedProduct.setPrice(newProductData.getPrice());
            updatedProduct.setAvailableStock(newProductData.getAvailableStock());
            updatedProduct.setActive(newProductData.getActive());
            updatedProduct.setDiscount(newProductData.getDiscount());

            //Cambiar cuando se puedan tener más de una categoría
            updatedProduct.setCategory(newProductData.getCategory());

            updatedProduct.setHeight(newProductData.getHeight());
            updatedProduct.setWidth(newProductData.getWidth());


            //Almacenar el nuevo producto actualizado
            productRepository.save(updatedProduct);

            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    public ResponseEntity<String> deactivateOneProduct(Long id) {
        try {
            Optional<Product> productFound = productRepository.findById(id);
            if (!productFound.isPresent()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            Product product = productFound.get();
            product.setActive(false);
            productRepository.save(product);

            return new ResponseEntity<>("Succesfully deactivated", HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> activateOneProduct(Long id) {
        try {
            Optional<Product> productFound = productRepository.findById(id);
            if (!productFound.isPresent()){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            Product product = productFound.get();
            product.setActive(true);
            productRepository.save(product);

            return new ResponseEntity<>("Succesfully activated", HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
