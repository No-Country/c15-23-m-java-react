package c15_23_m_java_react.com.product_service.services;

import c15_23_m_java_react.com.product_service.dtos.ShoppingLineDTO;
import c15_23_m_java_react.com.product_service.entities.ShoppingLine;
import c15_23_m_java_react.com.product_service.repository.ProductRepository;
import c15_23_m_java_react.com.product_service.repository.ShoppingLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingLineService {
    
    @Autowired
    ShoppingLineRepository shoppingLineRepository;

    @Autowired
    ProductRepository productRepository;

    //Creamos una nueva shoppingLine
    //El ID del usuario se pasa dentro del cuerpo
    //El producto relacionado se pasa dentro del cuerpo también
    public ResponseEntity<ShoppingLine> createShoppingLine(ShoppingLineDTO shoppingLineDTO) {
        try {
            ShoppingLine shoppingLine = new ShoppingLine();
            shoppingLine.setProduct(productRepository.findById(shoppingLineDTO.getProductID()).get());
            shoppingLine.setUserID(shoppingLineDTO.getUserID());
            shoppingLine.setQuantity(shoppingLineDTO.getQuantity());

            shoppingLineRepository.save(shoppingLine);
            return new ResponseEntity<>(shoppingLine, HttpStatus.CREATED);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> increaseQuantity(Long lineID){
        try {
            ShoppingLine shoppingLine = shoppingLineRepository.findById(lineID).get();

            Integer quantity = shoppingLine.getQuantity();

            //TODO: hacer comprobación de que no supere el stock
            quantity += 1;
            shoppingLine.setQuantity(quantity);

            shoppingLineRepository.save(shoppingLine);

            return new ResponseEntity<>("Aumentado exitosamente", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    public ResponseEntity<String> reduceQuantity(Long lineID) {
        try {
            ShoppingLine shoppingLine = shoppingLineRepository.findById(lineID).get();
            Integer quantity = shoppingLine.getQuantity();

            //Para evitar que vaya a numeros negativos
            if (quantity > 1) {
                quantity -= 1;
                shoppingLine.setQuantity(quantity);
                shoppingLineRepository.save(shoppingLine);
                return new ResponseEntity<>("Reducido exitosamente", HttpStatus.OK);
            }
            return new ResponseEntity<>("Ya no se puede reducir mas", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);        }
    }

    public List<ShoppingLine> getAllShoppingLines() {
        return shoppingLineRepository.findAll();
    }


    public ResponseEntity<?> getAllShoppingLinesByUserID(Long userID) {
        try {
            List<ShoppingLine> shoppingLines = shoppingLineRepository.getAllShoppingLinesByUserID(userID);
            if (shoppingLines.isEmpty()) {
                return new ResponseEntity<>(shoppingLines, HttpStatus.FOUND);
            }
            return new ResponseEntity<>(shoppingLines, HttpStatus.NOT_FOUND);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> deleteShoppingLineById(Long lineID) {
        try {
            shoppingLineRepository.deleteById(lineID);
            return new ResponseEntity<>("Linea eliminada correctamente", HttpStatus.OK);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
