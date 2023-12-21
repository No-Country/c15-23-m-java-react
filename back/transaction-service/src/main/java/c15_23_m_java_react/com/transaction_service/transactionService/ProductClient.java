package c15_23_m_java_react.com.transaction_service.transactionService;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import c15_23_m_java_react.com.transaction_service.dtos.ProductDto;

@FeignClient(name = "product-service", url = "${PRODUCT_SERVICE_URL}")
public interface ProductClient {
    
    @GetMapping("/products/{id}")
    ProductDto getProductDto(@PathVariable("id") Long id);
}
