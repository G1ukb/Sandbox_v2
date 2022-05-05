package annotations;

import java.lang.annotation.Annotation;
import java.lang.reflect.AnnotatedElement;
import java.lang.reflect.Method;

public class AnnotationDemo {

    public static void main(String[] args) {
        readAnnotationOn(AnnotationDemo.class.getMethods());
    }

    @FirstAnnotation
    public void firstMethod() {
        System.out.println("first method");
    }

    @FirstAnnotation(value = "This is an first annotation used by second method")
    public void secondMethod() {
        System.out.println("second method");
    }

    private static void readAnnotationOn(Method[] methods) {
        try {
            for (AnnotatedElement element: methods) {
                Annotation[] annotations = element.getAnnotations();
                for (Annotation annotation : annotations) {
                    if (annotation instanceof FirstAnnotation) {
                        System.out.println("Welcome msg is: " + ((FirstAnnotation) annotation).value());
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
