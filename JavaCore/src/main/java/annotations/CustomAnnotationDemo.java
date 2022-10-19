package annotations;

import java.lang.annotation.Annotation;
import java.lang.reflect.AnnotatedElement;
import java.lang.reflect.Method;
import java.util.concurrent.Callable;

public class CustomAnnotationDemo {

    public static void main(String[] args) {
        readAnnotationOn(CustomAnnotationDemo.class.getMethods());
    }

    @CustomAnnotations
    public void firstMethod() {
        System.out.println("first method");
    }

    @CustomAnnotations(value = "This is an first annotation used by second method")
    public void secondMethod() {
        System.out.println("second method");
    }

    private static void readAnnotationOn(Method[] methods) {
        try {
            for (AnnotatedElement element : methods) {
                Annotation[] annotations = element.getAnnotations();
                for (Annotation annotation : annotations) {
                    if (annotation instanceof CustomAnnotations) {
                        System.out.println("Welcome msg is: " + ((CustomAnnotations) annotation).value());
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
