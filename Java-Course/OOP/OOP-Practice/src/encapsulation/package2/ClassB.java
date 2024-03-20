package encapsulation.package2;

import encapsulation.package1.ClassA;

public class ClassB extends ClassA {

    void doSomethingClassB() {
        doSomething2();				// protected modifier demo
        doSomethingClassBPrivate(); // private modifier demo
    }

    private void doSomethingClassBPrivate() {

    }

}
