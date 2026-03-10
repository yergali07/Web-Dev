def string_splosion(s):
    result = ""
    for i in range(1, len(s) + 1):
        result += s[:i]
    return result
