private String extractTextBetween(String text, char startDelimiter, char endDelimiter) {
    if (text != null && text.contains(String.valueOf(startDelimiter)) && text.contains(String.valueOf(endDelimiter))) {
        int start = text.indexOf(startDelimiter) + 1;
        int end = text.indexOf(endDelimiter);

        return (start < end) ? text.substring(start, end) : text;
    }
    return text;
}

private String extractTextBetweenSquareBrackets(String text) {
    return extractTextBetween(text, '[', ']');
}

private String extractTextBetweenParentheses(String text) {
    return extractTextBetween(text, '(', ')');
}

private String extractValueFromBusinessCapability(String text) {
    if (text != null) {
        Pattern pattern = Pattern.compile("BusinessCapability : \"(.*?)\"");
        Matcher matcher = pattern.matcher(text);

        return matcher.find() ? matcher.group(1) : text;
    }
    return text;
}
