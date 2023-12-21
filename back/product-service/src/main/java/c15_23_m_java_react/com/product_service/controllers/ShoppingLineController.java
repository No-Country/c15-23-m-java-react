package c15_23_m_java_react.com.product_service.controllers;

import c15_23_m_java_react.com.product_service.dtos.ShoppingLineDTO;
import c15_23_m_java_react.com.product_service.entities.ShoppingLine;
import c15_23_m_java_react.com.product_service.services.ShoppingLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/lines")
public class ShoppingLineController {

    @Autowired
    ShoppingLineService shoppingLineService;


    @GetMapping(path = "/{userID}")
    public ResponseEntity<?> getAllShoppingLinesByUserID(@PathVariable Long userID){
        return shoppingLineService.getAllShoppingLinesByUserID(userID);
    }

    @PostMapping(path = "/")
    public ResponseEntity<ShoppingLine> createShoppingLine(@RequestBody ShoppingLineDTO shoppingLineDTO){
        return shoppingLineService.createShoppingLine(shoppingLineDTO);
    }

    @PostMapping(path = "/increase/{lineID}")
    public ResponseEntity<String> increaseQuantity(@PathVariable Long lineID){
        return shoppingLineService.increaseQuantity(lineID);
    }

    @PostMapping(path = "/reduce/{lineID}")
    public ResponseEntity<String> reduceQuantity(@PathVariable Long lineID){
        return shoppingLineService.reduceQuantity(lineID);
    }

    @GetMapping(path = "/")
    public List<ShoppingLine> getAllShoppingLines(){
        return shoppingLineService.getAllShoppingLines();
    }

    @DeleteMapping(path = "/{lineID}")
    public ResponseEntity<String> deleteShoppingLineById(@PathVariable Long lineID){
        return shoppingLineService.deleteShoppingLineById(lineID);
    }
}
