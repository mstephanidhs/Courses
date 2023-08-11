package com.mstephanidhs.springcoredemo.rest;

import com.mstephanidhs.springcoredemo.common.Coach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    // define a private field for the dependency
    private Coach myCoach;

    // private Coach anotherCoach;

    // define a constructor for dependency injection
    // don't have to use Qualifier, since I have used Primary
    //    @Autowired
    //    public DemoController(Coach theCoach) {
    //        myCoach = theCoach;
    //    }

    // Qualifier: specify which "Coach" object should be used
        @Autowired
        public DemoController(@Qualifier("aquatic") Coach theCoach) {
            System.out.println("In constructor: " + getClass().getSimpleName());
            myCoach = theCoach;
        }


    // problem when there are multiple "Coach" objects, don't know which one to choose
    // setter
    //    @Autowired
    //    public void setCoach(Coach theCoach) {
    //        myCoach = theCoach;
    //    }

    @GetMapping("/dailyworkout")
    public String getDailyWorkout() {
        return myCoach.getDailyWorkout();
    }

    // @GetMapping("/check")
    // public String check() {
    //    return "Comparing beans: myCoach == anotherCoach, " + (myCoach == anotherCoach);
    // }
}
