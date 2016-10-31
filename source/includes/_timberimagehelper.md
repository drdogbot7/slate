
# Timber\ImageHelper
Implements the Twig image filters: https://github.com/timber/timber/wiki/Image-cookbook#arbitrary-resizing-of-images - resize - retina - letterbox - tojpg Implementation: - public static functions provide the methods that are called by the filter - most of the work is common to all filters (URL analysis, directory gymnastics, file caching, error management) and done by private static functions - the specific part (actual image processing) is delegated to dedicated subclasses of TimberImageOperation



Name | Type | Description
---- | ---- | -----------
[resize](#resize) | string | (ex: )

## _delete_generated_if_image
`_delete_generated_if_image( mixed $post_id )`

**returns:** `void` 

Checks if attachment is an image before deleting generated files

Name | Type | Description
---- | ---- | -----------
$post_id | mixed | 



## add_filters
`add_filters( )`

**returns:** `void` 

adds a 'relative' key to wp_upload_dir() result. It will contain the relative url to upload dir.



## delete_generated_files
`delete_generated_files( mixed $local_file )`

**returns:** `void` 

Deletes the auto-generated files for resize and letterboxing created by Timber or: http://example.org/wp-content/uploads/2015/my-pic.jpg

Name | Type | Description
---- | ---- | -----------
$local_file | mixed | 



## get_letterbox_file_path
`get_letterbox_file_path( mixed $url, mixed $w, mixed $h, mixed $color )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$w | mixed | 
$h | mixed | 
$color | mixed | 



## get_letterbox_file_url
`get_letterbox_file_url( mixed $url, mixed $w, mixed $h, mixed $color )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$w | mixed | 
$h | mixed | 
$color | mixed | 



## get_resize_file_path
`get_resize_file_path( mixed $url, mixed $w, mixed $h, mixed $crop )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$w | mixed | 
$h | mixed | 
$crop | mixed | 



## get_resize_file_url
`get_resize_file_url( mixed $url, mixed $w, mixed $h, mixed $crop )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$w | mixed | 
$h | mixed | 
$crop | mixed | 



## get_server_location
`get_server_location( mixed $url )`

**returns:** `string` 

Determines the filepath corresponding to a given URL

Name | Type | Description
---- | ---- | -----------
$url | mixed | 



## get_sideloaded_file_loc
`get_sideloaded_file_loc( mixed $file )`

**returns:** `string` 

Determines the filepath where a given external file will be stored.

Name | Type | Description
---- | ---- | -----------
$file | mixed | 



## img_to_jpg
`img_to_jpg( mixed $src, string $bghex="#FFFFFF", bool $force=false )`

**returns:** `string` 

Generates a new image by converting the source GIF or PNG into JPG

Name | Type | Description
---- | ---- | -----------
$src | mixed | 
$bghex | string | 
$force | bool | 



## init
`init( )`

**returns:** `void` 



## is_animated_gif
`is_animated_gif( mixed $file )`

**returns:** `boolean` true if it's an animated gif, false if not

checks to see if the given file is an aimated gif

Name | Type | Description
---- | ---- | -----------
$file | mixed | 



## letterbox
`letterbox( mixed $src, mixed $w, mixed $h, string $color="#000000", bool $force=false )`

**returns:** `string` 

Generate a new image with the specified dimensions. New dimensions are achieved by adding colored bands to maintain ratio.

Name | Type | Description
---- | ---- | -----------
$src | mixed | 
$w | mixed | 
$h | mixed | 
$color | string | 
$force | bool | 



## resize
`resize( mixed $src, mixed $w, mixed $h, string $crop="default", bool $force=false )`

**returns:** `string` (ex: )

Generates a new image with the specified dimensions. New dimensions are achieved by cropping to maintain ratio.

Name | Type | Description
---- | ---- | -----------
$src | mixed | 
$w | mixed | 
$h | mixed | 
$crop | string | 
$force | bool | 

###### Twig
```twig
	<img src="{{ image.src | resize(300, 200, 'top') }}" />
```
###### HTML
```html
	<img src="http://example.org/wp-content/uploads/pic-300x200-c-top.jpg" />
```

## retina_resize
`retina_resize( mixed $src, mixed $multiplier=2, bool/boolean $force=false )`

**returns:** `string` url to the new image

Generates a new image with increased size, for display on Retina screens.

Name | Type | Description
---- | ---- | -----------
$src | mixed | 
$multiplier | mixed | 
$force | bool/boolean | 



## sideload_image
`sideload_image( mixed $file )`

**returns:** `string` the URL to the downloaded file

downloads an external image to the server and stores it on the server

Name | Type | Description
---- | ---- | -----------
$file | mixed | 



## add_actions
`add_actions( )`

**returns:** `void` 

Deletes all resized versions of an image when the source is deleted or its meta data is regenerated



## add_constants
`add_constants( )`

**returns:** `void` 

Adds a constant defining the path to the content directory relative to the site for example /wp-content or /content



## process_delete_generated_files
`process_delete_generated_files( mixed $filename, mixed $ext, mixed $dir, mixed $search_pattern, mixed $match_pattern=null )`

**returns:** `void` 

Deletes resized versions of the supplied file name. So if passed a value like my-pic.jpg, this function will delete my-pic-500x200-c-left.jpg, my-pic-400x400-c-default.jpg, etc. keeping these here so I know what the hell we're matching $match = preg_match("/\/srv\/www\/wordpress-develop\/src\/wp-content\/uploads\/2014\/05\/$filename-[0-9]*x[0-9]*-c-[a-z]*.jpg/", $found_file); $match = preg_match("/\/srv\/www\/wordpress-develop\/src\/wp-content\/uploads\/2014\/05\/arch-[0-9]*x[0-9]*-c-[a-z]*.jpg/", $filename);

Name | Type | Description
---- | ---- | -----------
$filename | mixed | 
$ext | mixed | 
$dir | mixed | 
$search_pattern | mixed | 
$match_pattern | mixed | 






