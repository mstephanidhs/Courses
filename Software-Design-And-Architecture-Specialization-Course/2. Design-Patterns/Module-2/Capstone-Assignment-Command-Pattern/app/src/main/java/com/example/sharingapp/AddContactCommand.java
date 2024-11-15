package com.example.sharingapp;

import android.content.Context;

public class AddContactCommand extends Command {

    private ContactList contactList;
    private Context context;
    private Contact contact;

    public AddContactCommand(ContactList contactList, Context context, Contact contact) {
        this.contactList = contactList;
        this.context = context;
        this.contact = contact;
    }

    public void execute() {
        this.contactList.addContact(contact);
        setIsExecuted(contactList.saveContacts(context));
    }
}