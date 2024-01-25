private String removeContentInsideParentheses(String text) {
    if (text != null && text.contains("(") && text.contains(")")) {
        int start = text.indexOf("(");
        int end = text.indexOf(")");

        return text.substring(0, start) + text.substring(end + 1);
    }
    return text;
}
