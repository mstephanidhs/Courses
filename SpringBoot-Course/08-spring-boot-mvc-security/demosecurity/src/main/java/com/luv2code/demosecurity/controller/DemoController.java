package com.luv2code.demosecurity.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DemoController {

    @GetMapping("/")
    public String showHome() {

        return "home";
    }

    // add a request mapping for /leaders
    @GetMapping("/leaders")
    public String showLeaders() {

        return "leaders";
    }

    // add request mapping for /systems
    @GetMapping("/systems")
    public String showSystems() {

        return "systems";
    }

    // add request mapping for /access-denied
    @GetMapping("/access-denied")
    public String showAccessDenied() {

        return "access-denied";
    }
}
