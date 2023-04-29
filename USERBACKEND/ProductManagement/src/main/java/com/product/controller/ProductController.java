package com.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.model.Product;
import com.product.services.ProductService;

import net.bytebuddy.asm.MemberSubstitution.Substitution.Chain.Step.Resolution;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ProductController {
	@Autowired
	private ProductService productService;

	@PostMapping("/saveProduct")
	public ResponseEntity<?> saveProduct(@RequestBody Product product) {
		System.err.println("INSIDE SAVE ");
		return ResponseEntity.status(HttpStatus.OK).body(productService.saveProduct(product));
	}

	@GetMapping("/")
	public ResponseEntity<?> getAllProduct() {
		System.err.println("INSIDE GAET ALLLLLLLLLLLL");
		return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProduct());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable Integer id) {
		System.err.println("INISDE GETELEMENTBYID");
		return ResponseEntity.status(HttpStatus.OK).body(productService.getProductById(id));
	}

	@DeleteMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
		System.err.println("INSIDE DELETE");
		return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProduct(id));
	}

	@PutMapping("/editProduct/{id}")
	public ResponseEntity<?> editProduct(@RequestBody Product product, @PathVariable Integer id) {
		System.err.println("INISDE EDIT");
		return ResponseEntity.status(HttpStatus.OK).body(productService.editProduct(product, id));
	}

}
