private String removeContentInsideParentheses(String text) {
    if (text != null && text.contains("(") && text.contains(")")) {
        int start = text.indexOf("(");
        int end = text.indexOf(")");

        // Remove content inside parentheses along with surrounding white spaces
        String contentInsideParentheses = text.substring(start + 1, end).trim();

        // Remove any white spaces
        contentInsideParentheses = contentInsideParentheses.replaceAll("\\s+", "");

        // Remove any special characters like \
        contentInsideParentheses = contentInsideParentheses.replaceAll("[^a-zA-Z0-9]", "");

        return text.substring(0, start).trim() + contentInsideParentheses + text.substring(end + 1).trim();
    }
    return text;
}
