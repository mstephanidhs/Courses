package com.mstephanidhs.springcoredemo.common;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
//@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE) -> edit the scope of the bean
public class CricketCoach implements Coach {

    // define our init method
    // @PostConstruct
    // public void doMyStartupStuff() {
    //    System.out.println("In doMyStartupStuff(): " + getClass().getSimpleName());
    // }

    // @PreDestroy
    // public void doMyCleanupStuff() {
    //    System.out.println("In doMyCleanupStuff(): " + getClass().getSimpleName());
    // }

    // define our destroy method

    @Override
    public String getDailyWorkout() {
        return "Practise fast bowling for 15 minutes";
    }
}
