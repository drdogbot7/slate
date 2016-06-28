
# Timber\Timber
Timber Class. Main class called Timber for this plugin.

###### PHP
```php
<?php
 $posts = Timber::get_posts();
 $posts = Timber::get_posts('post_type = article')
 $posts = Timber::get_posts(array('post_type' => 'article', 'category_name' => 'sports')); // uses wp_query format.
 $posts = Timber::get_posts(array(23,24,35,67), 'InkwellArticle');
 $context = Timber::get_context(); // returns wp favorites!
 $context['posts'] = $posts;
 Timber::render('index.twig', $context);
```

Name | Type | Description
---- | ---- | -----------

## __construct
`__construct( )`

**returns:** `void` 



## <strike>add_route</strike>
**DEPRECATED** since 0.20.0 and will be removed in 1.1

`add_route( mixed $route, \Timber\callable $callback, array $args=array() )`

**returns:** `void` 

Add route.

Name | Type | Description
---- | ---- | -----------
$route | mixed | 
$callback | \Timber\callable | 
$args | array | 



## compile
`compile( mixed $filenames, array $data=array(), bool $expires=false, string $cache_mode="default", bool $via_render=false )`

**returns:** `bool/string` 

Compile function.

Name | Type | Description
---- | ---- | -----------
$filenames | mixed | 
$data | array | 
$expires | bool | 
$cache_mode | string | 
$via_render | bool | 



## compile_string
`compile_string( mixed $string, array $data=array() )`

**returns:** `bool/string` 

Compile string.

Name | Type | Description
---- | ---- | -----------
$string | mixed | 
$data | array | 



## fetch
`fetch( mixed $filenames, array $data=array(), bool $expires=false, string $cache_mode="default" )`

**returns:** `bool/string` 

Fetch function.

Name | Type | Description
---- | ---- | -----------
$filenames | mixed | 
$data | array | 
$expires | bool | 
$cache_mode | string | 



## get_calling_script_dir
`get_calling_script_dir( mixed $offset )`

**returns:** `string` 

Get calling script dir.

Name | Type | Description
---- | ---- | -----------
$offset | mixed | 



## <strike>get_calling_script_file</strike>
**DEPRECATED** since 0.20.0

`get_calling_script_file( mixed $offset )`

**returns:** `string/null` 

Get calling script file.

Name | Type | Description
---- | ---- | -----------
$offset | mixed | 



## get_context
`get_context( )`

**returns:** `array` 

Get context.



## get_pagination
`get_pagination( array $prefs=array() )`

**returns:** `array` mixed

Get pagination.

Name | Type | Description
---- | ---- | -----------
$prefs | array | 



## get_post
`get_post( bool $query=false, string $PostClass="Timber\Post" )`

**returns:** `array/bool/null` 

Get post.

Name | Type | Description
---- | ---- | -----------
$query | bool | 
$PostClass | string | 



## get_posts
`get_posts( bool $query=false, string $PostClass="Timber\Post", bool $return_collection=false )`

**returns:** `array/bool/null` 

Get posts.

Name | Type | Description
---- | ---- | -----------
$query | bool | 
$PostClass | string | 
$return_collection | bool | 

###### PHP
```php
<?php
	$posts = Timber::get_posts();
 	 $posts = Timber::get_posts('post_type = article')
 	 $posts = Timber::get_posts(array('post_type' => 'article', 'category_name' => 'sports')); // uses wp_query format.
 	 $posts = Timber::get_posts('post_type=any', array('portfolio' => 'MyPortfolioClass', 'alert' => 'MyAlertClass')); //use a classmap for the $PostClass
```

## get_sidebar
`get_sidebar( string $sidebar="", array $data=array() )`

**returns:** `bool/string` 

Get sidebar.

Name | Type | Description
---- | ---- | -----------
$sidebar | string | 
$data | array | 



## get_sidebar_from_php
`get_sidebar_from_php( string $sidebar="", mixed $data )`

**returns:** `string` 

Get sidebar from PHP

Name | Type | Description
---- | ---- | -----------
$sidebar | string | 
$data | mixed | 



## get_sites
`get_sites( bool/array/bool $blog_ids=false )`

**returns:** `array` 

Get sites.

Name | Type | Description
---- | ---- | -----------
$blog_ids | bool/array/bool | 



## get_term
`get_term( int/\Timber\WP_Term/object $term, string $taxonomy="post_tag", string $TermClass="Timber\Term" )`

**returns:** `\Timber\Timber\Term/\Timber\WP_Error/null` 

Get term.

Name | Type | Description
---- | ---- | -----------
$term | int/\Timber\WP_Term/object | 
$taxonomy | string | 
$TermClass | string | 



## get_terms
`get_terms( mixed/string/array $args=null, array $maybe_args=array(), string $TermClass="Timber\Term" )`

**returns:** `mixed` 

Get terms.

Name | Type | Description
---- | ---- | -----------
$args | mixed/string/array | 
$maybe_args | array | 
$TermClass | string | 



## get_widgets
`get_widgets( mixed $widget_id )`

**returns:** `\Timber\TimberFunctionWrapper` 

Get widgets.

Name | Type | Description
---- | ---- | -----------
$widget_id | mixed | 



## init_constants
`init_constants( )`

**returns:** `void` 



## query_post
`query_post( bool $query=false, string $PostClass="Timber\Post" )`

**returns:** `array/bool/null` 

Query post.

Name | Type | Description
---- | ---- | -----------
$query | bool | 
$PostClass | string | 



## query_posts
`query_posts( bool $query=false, string $PostClass="Timber\Post" )`

**returns:** `array/bool/null` 

Query posts.

Name | Type | Description
---- | ---- | -----------
$query | bool | 
$PostClass | string | 



## render
`render( mixed $filenames, array $data=array(), bool $expires=false, string $cache_mode="default" )`

**returns:** `bool/string` 

Render function.

Name | Type | Description
---- | ---- | -----------
$filenames | mixed | 
$data | array | 
$expires | bool | 
$cache_mode | string | 



## render_string
`render_string( mixed $string, array $data=array() )`

**returns:** `bool/string` 

Render string.

Name | Type | Description
---- | ---- | -----------
$string | mixed | 
$data | array | 



## init
`init( )`

**returns:** `void` 



## test_compatibility
`test_compatibility( )`

**returns:** `void` 

Tests whether we can use Timber




### Class: \Timber\Timber

> Timber Class. Main class called Timber for this plugin.

###### Example
###### PHP
```php
<?php
 $posts = Timber::get_posts();
 $posts = Timber::get_posts('post_type = article')
 $posts = Timber::get_posts(array('post_type' => 'article', 'category_name' => 'sports')); // uses wp_query format.
 $posts = Timber::get_posts(array(23,24,35,67), 'InkwellArticle');
 $context = Timber::get_context(); // returns wp favorites!
 $context['posts'] = $posts;
 Timber::render('index.twig', $context);
```



