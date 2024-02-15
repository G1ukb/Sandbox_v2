package easy;

//Remove Duplicates from an array
//Input: arr[] = {2, 2, 2, 2, 2}

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;

public class RemoveDuplicates {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(remove(new int[]{2, 2, 2, 2, 2})));
    }

    public static int[] remove(int[] arr) {
        Set<Integer> set = new LinkedHashSet<>();
        for (int j : arr) {
            set.add(j);
        }
        return set.stream().mapToInt(Integer::intValue).toArray();
    }

}
