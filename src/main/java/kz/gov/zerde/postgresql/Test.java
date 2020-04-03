package kz.gov.zerde.postgresql;

public class Test {
    public static void main(String[] args) {
        try {
            throw new NullPointerException("sdf");
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(new StringBuilder("Here").reverse());
    }
}
