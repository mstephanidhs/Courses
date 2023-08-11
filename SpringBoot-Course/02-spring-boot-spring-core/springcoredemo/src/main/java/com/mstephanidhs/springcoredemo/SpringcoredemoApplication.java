package com.mstephanidhs.springcoredemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// if some packages are not in the main folder
//@SpringBootApplication(
//		scanBasePackages = {"com.mstephanidhs.springcoredemo",
//							"com.luv2code.util"}
//)
@SpringBootApplication
public class SpringcoredemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringcoredemoApplication.class, args);
	}

}
