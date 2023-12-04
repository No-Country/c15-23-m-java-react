package c15_23_m_java_react.com.product_service.controllers;

import c15_23_m_java_react.com.product_service.entities.Product;
import c15_23_m_java_react.com.product_service.services.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    ProductService productService;


    @GetMapping(path = "/")
    public ResponseEntity<List<Product>> getAllProducts(){
        return productService.getAllProducts();
    }


    @PostMapping(path = "/")
    public ResponseEntity<Product> createNewProduct(@RequestBody Product product){
        return productService.createNewProduct(product);
    }


}
