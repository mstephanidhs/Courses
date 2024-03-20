package interfaces;

public interface PaymentProcessor {

    int RETRY_ATTEPMPTS = 5;

    void processPayment(PaymentData payment);

    default void someDefaultMethod() {
        System.out.println("This is the default method");
    }

//    It can't be called directly from the class that will implement the specific interface
//    Instead, inside the classes' method, PaymentProcessor.someStaticMethod
    static void someStaticMethod() {
        System.out.println("This is the static method");
    }

}
