
# Timber\TextHelper
Class provides different text-related functions commonly used in WordPress development



Name | Type | Description
---- | ---- | -----------

## close_tags
`close_tags( mixed $html )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$html | mixed | 



## trim_characters
`trim_characters( mixed $text, mixed $num_chars=60, mixed $more=null )`

**returns:** `string` trimmed text.

Trims text to a certain number of characters. This function can be useful for excerpt of the post As opposed to wp_trim_words trims characters that makes text to take the same amount of space in each post for example

Name | Type | Description
---- | ---- | -----------
$text | mixed | 
$num_chars | mixed | 
$more | mixed | 



## trim_words
`trim_words( mixed $text, mixed $num_words=55, mixed $more=null, string $allowed_tags="p a span b i br blockquote" )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$text | mixed | 
$num_words | mixed | 
$more | mixed | 
$allowed_tags | string | 






