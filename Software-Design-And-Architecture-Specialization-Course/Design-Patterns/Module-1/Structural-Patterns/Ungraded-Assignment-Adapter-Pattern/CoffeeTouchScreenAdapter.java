public class CoffeeTouchScreenAdapter implements CoffeeMachineInterface{

    private OldCoffeeMachine theMachine;

    public void CoffeeTouchScreenAdapter(OldCoffeeMachine newMachine) {
        this.theMachine = newMachine;
    }

    @Override
    public void chooseFirstSelection() {
        this.theMachine.selectA();
    }

    @Override
    public void chooseSecondSelection() {
        this.theMachine.selectB();
    }
}