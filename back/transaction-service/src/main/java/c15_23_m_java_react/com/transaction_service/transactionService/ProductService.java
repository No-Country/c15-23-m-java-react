package c15_23_m_java_react.com.transaction_service.transactionService;

import org.springframework.stereotype.Service;

import c15_23_m_java_react.com.transaction_service.dtos.ProductDto;

@Service
public class ProductService {
    
    
    private final ProductClient productClient;

  
    public ProductService (ProductClient productClient)
    {
        this.productClient = productClient;
    }

    public ProductDto getProductDto(Long id)
    {
        return productClient.getProductDto(id);
    }
}
