public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        
        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
    
        String lowercaseInput = input.toLowerCase();

        // Create an array to track the presence of each letter
        boolean[] lettersPresent = new boolean[26];

        for (int i = 0; i < lowercaseInput.length(); i++) {
            char currentChar = lowercaseInput.charAt(i);
            if (currentChar >= 'a' && currentChar <= 'z') {
                // Mark the corresponding letter as present
                lettersPresent[currentChar - 'a'] = true;
            }
        }

        // Check if all letters are present
        for (boolean letterPresent : lettersPresent) {
            if (!letterPresent) {
                return false; // Not a pangram
            }
        }

        return true; // Pangram
    }
}
