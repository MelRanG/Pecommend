package com.perfume.perfumeservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class PerfumeServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(PerfumeServiceApplication.class, args);
    }

}
