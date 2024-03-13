package com.in28minutes.springboot.learnjpaandhibernate.course.jpa;

import com.in28minutes.springboot.learnjpaandhibernate.course.jdbc.Course;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJpaRepository {

        @PersistenceContext
        private EntityManager entityManager;

        public void insert(Course course) {
            entityManager.merge(course);
        }

        public Course findById(long id) {
            return entityManager.find(Course.class, id);
        }

        public void deleteById(long id) {
            Course course = entityManager.find(Course.class, id);
            entityManager.remove(course);
        }
}
