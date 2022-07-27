package com.perfume.perfumeservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class fileController {

    @GetMapping("/upload")
    public String upload(){
        return "upload";
    }
}
