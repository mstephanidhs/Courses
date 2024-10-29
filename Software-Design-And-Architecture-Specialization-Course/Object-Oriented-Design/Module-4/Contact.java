package com.example.sharingapp;

import java.util.UUID;


public class Contact {
    private String username;
    private String email;
    private String id;

    public Contact(String username, String email, String id) {
        this.username = username;
        this.email = email;

        if (id == null)
            setId();
        else
            updateId(id);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;

        if (getClass() != obj.getClass())
            return false;

        Contact otherContact = (Contact) obj;

        return Object.equals(username, otherContact.username) && Object.equals(email, otherContact.email) && Object.equals(id, otherContact.id);
    }

    public void setId() {
        this.id = UUID.randomUUID().toString();
    }

    public void updateId(String id) {
        this.id = id;
    }

    public String getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setUsername(String username) {
        this.id = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}