package com.mstephanidhs.springcoredemo.config;

import com.mstephanidhs.springcoredemo.common.Coach;
import com.mstephanidhs.springcoredemo.common.SwimCoach;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SportConfig {

    @Bean("aquatic")
    public Coach swimCoach() {
        return new SwimCoach();
    }
}
