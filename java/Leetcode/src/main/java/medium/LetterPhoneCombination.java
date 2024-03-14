package medium;

// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent.
// Return the answer in any order.
//
// A mapping of digits to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.
// Example 1:
//
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LetterPhoneCombination {

    public static void main(String[] args) {
        System.out.println(letterCombinations("232"));
    }

    public static List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits.isEmpty()) {
            return result;
        }

        backtrack(result, fillLettersArray(), digits, "", 0);
        return result;
    }

    private static void backtrack(List<String> result, Map<Character, String> phoneMap,
                                  String digits, String current, int index) {
        if (index == digits.length()) {
            result.add(current);
            return;
        }

        char digit = digits.charAt(index);
        String letters = phoneMap.get(digit);

        for (int i = 0; i < letters.length(); i++) {
            backtrack(result, phoneMap, digits, current + letters.charAt(i), index + 1);
        }
    }

    public static Map<Character, String> fillLettersArray() {
        Map<Character, String> phoneMap = new HashMap<>();
        phoneMap.put('2', "abc");
        phoneMap.put('3', "def");
        phoneMap.put('4', "ghi");
        phoneMap.put('5', "jkl");
        phoneMap.put('6', "mno");
        phoneMap.put('7', "pqrs");
        phoneMap.put('8', "tuv");
        phoneMap.put('9', "wxyz");
        return phoneMap;
    }

}
