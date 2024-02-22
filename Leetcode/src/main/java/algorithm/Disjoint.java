package algorithm;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class Disjoint {

//    The Disjoint Set algorithm is a data structure that allows efficient
//    identification or handling of separate components in a graph and
//    is mostly used for problems involving connectivity queries.
//    Connectivity problem:
//      B
//     /| D (as D connected?)
//    A C

    //Collections realization
    public static boolean disjoint(Collection<?> c1, Collection<?> c2) {
        Collection<?> contains = c2;
        Collection<?> iterate = c1;
        int c1size = c1.size();
        int c2size = c2.size();

        if (c1size == 0 || c2size == 0) {
            return true;
        }
        if (c1size > c2size) {
            iterate = c2;
            contains = c1;
        }

        for (Object e : iterate) {
            if (contains.contains(e)) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        List<Integer> firstList = Arrays.asList(1, 2);
        List<Integer> secondArray = Arrays.asList(4, 1);
        List<Integer> thirdArray = Arrays.asList(5, 6);

        System.out.println(!Collections.disjoint(firstList, secondArray));
        System.out.println(!Collections.disjoint(firstList, thirdArray));
    }

}
