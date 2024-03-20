package OOP;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;

public class Cart {

    private static final int DEFAULT_CART_CAPACITY = 10;
    private static final int MONEY_SCALE = 2;
    private static final double DEFAULT_TAX_RATE = 0.15;
    private static final String DEFAULT_TAX_TYPE = "incomeTax";
    private static final double DEFAULT_DISCOUNT_RATE = 0;
    private static final String DEFAULT_DISCOUNT_NAME = "zeroDiscount";

    private static int cartCounter;

    private int id;
    private int userId;
    private BigDecimal totalNetPrice; // without taxes
    private BigDecimal totalGrossPrice;
    private BigDecimal totalTax;
    private Tax tax;
    private Product[] products;
    private int indexToAddNewProduct;
    private Discount discount;

    static  {
        System.out.println("Cart.class is uploaded into JVM");
    }

    {
        cartCounter++;
        userId = 1;
        tax = new Tax(DEFAULT_DISCOUNT_NAME, DEFAULT_TAX_RATE);
    }

    public Cart() {}

    public Cart(int id, int userId) {
        this.id = id;
        this.userId = userId;
    }

    public void addProduct(Product product) {
        if (product == null)
            return;

        if (products == null)
            products = new Product[DEFAULT_CART_CAPACITY];

        if (products.length < indexToAddNewProduct + 1)
            products = Arrays.copyOf(products, products.length << 1);

        products[indexToAddNewProduct++] = product;
        calculateTotalNetPrice();
        calculateTotalGrossPrice();
    }

    private BigDecimal calculateTotalNetPrice() {
        this.totalNetPrice = BigDecimal.valueOf(Arrays.stream(this.products)
                .mapToDouble(product -> product != null ? product.getPrice().doubleValue() : 0)
                .sum()).setScale(MONEY_SCALE, RoundingMode.HALF_UP);

        return this.totalNetPrice;
    }

    private BigDecimal calculateTotalGrossPrice() {
        if (this.totalNetPrice.doubleValue() < 0)
            calculateTotalNetPrice();

        BigDecimal orderDiscount = this.totalNetPrice
                .multiply(BigDecimal.valueOf(discount.getDiscountRate()))
                .setScale(MONEY_SCALE, RoundingMode.HALF_UP);
        this.totalTax = this.totalNetPrice.multiply(BigDecimal.valueOf(tax.getTaxRate()))
                .setScale(MONEY_SCALE, RoundingMode.HALF_UP);
        this.totalGrossPrice = this.totalNetPrice.add(this.totalTax).subtract(orderDiscount);

        return this.totalGrossPrice;
    }

    public static int getCartCounter() {
        return cartCounter;
    }

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public BigDecimal getTotalNetPrice() {
        return totalNetPrice;
    }

    public BigDecimal getTotalGrossPrice() {
        return totalGrossPrice;
    }

    public BigDecimal getTotalTax() {
        return totalTax;
    }

    public Tax getTax() {
        return tax;
    }

    public Product[] getProducts() {
        return products;
    }

    public int getIndexToAddNewProduct() {
        return indexToAddNewProduct;
    }

    public Discount getDiscount() {
        return discount;
    }

    public static void setCartCounter(int cartCounter) {
        Cart.cartCounter = cartCounter;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setTotalNetPrice(BigDecimal totalNetPrice) {
        this.totalNetPrice = totalNetPrice;
    }

    public void setTotalGrossPrice(BigDecimal totalGrossPrice) {
        this.totalGrossPrice = totalGrossPrice;
    }

    public void setTotalTax(BigDecimal totalTax) {
        this.totalTax = totalTax;
    }

    public void setTax(Tax tax) {
        this.tax = tax;
    }

    public void setProducts(Product[] products) {
        this.products = products;
    }

    public void setIndexToAddNewProduct(int indexToAddNewProduct) {
        this.indexToAddNewProduct = indexToAddNewProduct;
    }

    public void setDiscount(Discount discount) {
        this.discount = discount;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", userId=" + userId +
                ", totalNetPrice=" + totalNetPrice +
                ", totalGrossPrice=" + totalGrossPrice +
                ", totalTax=" + totalTax +
                ", tax=" + tax +
                ", products=" + Arrays.toString(products) +
                ", indexToAddNewProduct=" + indexToAddNewProduct +
                ", discount=" + discount +
                '}';
    }

    public static class Tax {

        private String taxType;
        private double taxRate;

        public Tax(String taxType, double taxRate) {
            this.taxType = taxType;
            this.taxRate = taxRate;
        }

        public String getTaxType() {
            return taxType;
        }

        public void setTaxType(String taxType) {
            this.taxType = taxType;
        }

        public double getTaxRate() {
            return taxRate;
        }

        public void setTaxRate(double taxRate) {
            this.taxRate = taxRate;
        }
    }

    // inner class
    public class Discount {

        private String discountName;
        private double discountRate;

        public Discount(String discountName, double discountRate) {
            this.discountName = discountName;
            this.discountRate = discountRate;
        }

        public String getDiscountName() {
            return discountName;
        }

        public void setDiscountName(String discountName) {
            this.discountName = discountName;
        }

        public double getDiscountRate() {
            return discountRate;
        }

        public void setDiscountRate(double discountRate) {
            this.discountRate = discountRate;
        }
    }
}


