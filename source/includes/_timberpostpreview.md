
# Timber\PostPreview
An object that lets a user easily modify the post preview to their liking



Name | Type | Description
---- | ---- | -----------

## __construct
`__construct( \Timber\Post $post )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$post | \Timber\Post | 



## __toString
`__toString( )`

**returns:** `void` 



## chars
`chars( bool/\Timber\integer $char_length=false )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$char_length | bool/\Timber\integer | (in characters) of the target preview



## end
`end( string $end="&hellip;" )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$end | string | how should the text in the preview end



## force
`force( bool/boolean $force=true )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$force | bool/boolean | If the editor wrote a manual excerpt longer than the set length, should it be "forced" to the size specified?



## length
`length( mixed/\Timber\integer $length=50 )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$length | mixed/\Timber\integer | (in words) of the target preview



## read_more
`read_more( string $readmore="Read More" )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$readmore | string | What the text displays as to the reader inside of the <a> tag



## strip
`strip( bool/boolean/string $strip=true )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$strip | bool/boolean/string | strip the tags or what? You can also provide a list of allowed tags



## assemble
`assemble( string $text, array/\Timber\booelan $readmore_matches, boolean $trimmed )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$text | string | 
$readmore_matches | array/\Timber\booelan | 
$trimmed | boolean | was the text trimmed?



## run
`run( )`

**returns:** `void` 






