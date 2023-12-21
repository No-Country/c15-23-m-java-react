package c15_23_m_java_react.com.product_service.controllers;

import c15_23_m_java_react.com.product_service.entities.Product;
import c15_23_m_java_react.com.product_service.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;


    @GetMapping(path = "/all")
    public ResponseEntity<List<Product>> getAllProducts(){
        return productService.getAllProducts();
    }


    @PostMapping(path = "/")
    public ResponseEntity<Product> createNewProduct(@RequestBody Product product){
        return productService.createNewProduct(product);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

    @GetMapping(path = "/name/{name}")
    public ResponseEntity<List<Product>> getProductsByName(@PathVariable String name){
        return productService.getProductsByName(name);
    }

    @GetMapping(path = "/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    @GetMapping(path = "/stocked")
    public ResponseEntity<List<Product>> getStockedProducts(){
        return productService.getStockedProducts();
    }

    @GetMapping(path = "/active")
    public ResponseEntity<List<Product>> getActiveProducts(){
        return productService.getActiveProducts();
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Product> updateOneProduct(@PathVariable Long id, @RequestBody Product product){
        return productService.updateOneProduct(id, product);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deactivateOneProduct(@PathVariable Long id){
        return productService.deactivateOneProduct(id);
    }

    @PostMapping(path = "/{id}")
    public ResponseEntity<String> activateOneProduct(@PathVariable Long id){
        return productService.activateOneProduct(id);
    }
}
