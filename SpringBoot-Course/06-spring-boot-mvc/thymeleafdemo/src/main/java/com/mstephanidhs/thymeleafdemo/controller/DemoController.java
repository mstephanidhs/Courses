package com.mstephanidhs.thymeleafdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DemoController {

    // create a mapping for "/hello"
    @GetMapping("/hello")
    public String sayHello(Model theModel) {
        theModel.addAttribute("theDate", new java.util.Date());

        // its going to look inside src/main/resources/templates/helloworld.html
        // to find the specific file
        return "helloworld";
    }
}
