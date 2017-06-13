
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
[compile](#compile) | bool/string | The returned output.
[compile_string](#compile_string) | bool/string | 
[fetch](#fetch) | bool/string | The returned output.
[get_context](#get_context) | array | 
[get_pagination](#get_pagination) | array | mixed
[get_post](#get_post) | \Timber\Post/bool | Timber\Post object if a post was found, false if no post was found.
[get_posts](#get_posts) | array/bool/null | 
[get_sidebar](#get_sidebar) | bool/string | 
[get_sidebar_from_php](#get_sidebar_from_php) | string | 
[get_sites](#get_sites) | array | 
[get_term](#get_term) | \Timber\Timber\Term/\Timber\WP_Error/null | 
[get_terms](#get_terms) | mixed | 
[get_widgets](#get_widgets) | string | 
[query_post](#query_post) | array/bool/null | 
[query_posts](#query_posts) | \Timber\PostCollection | 
[render](#render) | bool/string | The echoed output.
[render_string](#render_string) | bool/string | 

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
`compile( array/string $filenames, array $data=array(), bool $expires=false, string $cache_mode="default", bool $via_render=false )`

**returns:** `bool/string` The returned output.

Compile a Twig file. Passes data to a Twig file and returns the output.

Name | Type | Description
---- | ---- | -----------
$filenames | array/string |  Name of the Twig file to render. If this is an array of files, Timber will
$data | array | 
$expires | bool | 
$cache_mode | string | 
$via_render | bool | 

###### PHP
```php
<?php
	$data = array(
	    'firstname' => 'Jane',
	    'lastname' => 'Doe',
	    'email' => 'jane.doe@example.org',
	);
		$team_member = Timber::compile( 'team-member.twig', $data );
```
	                                render the first file that exists.
	                                array, the first value is used for non-logged in visitors, the second for users.
	                                Default false.

## compile_string
`compile_string( string $string, array $data=array() )`

**returns:** `bool/string` 

Compile a string.

Name | Type | Description
---- | ---- | -----------
$string | string | A string with Twig variables.
$data | array | 

###### PHP
```php
<?php
	$data = array(
	    'username' => 'Jane Doe',
	);
		$welcome = Timber::compile_string( 'Hi {{ username }}, I’m a string with a custom Twig variable', $data );
```

## fetch
`fetch( array/string $filenames, array $data=array(), bool $expires=false, string $cache_mode="default" )`

**returns:** `bool/string` The returned output.

Fetch function.

Name | Type | Description
---- | ---- | -----------
$filenames | array/string |  Name of the Twig file to render. If this is an array of files, Timber will
$data | array | 
$expires | bool | 
$cache_mode | string | 



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
`get_post( bool $query=false, string/string/array $PostClass="Timber\Post" )`

**returns:** `\Timber\Post/bool` Timber\Post object if a post was found, false if no post was found.

Get a post by post ID or query (as a query string or an array of arguments).

Name | Type | Description
---- | ---- | -----------
$query | bool | 
$PostClass | string/string/array | Optional. Class to use to wrap the returned post object. Default 'Timber\Post'.



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
`get_sidebar( string $sidebar="sidebar.php", array $data=array() )`

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
`get_widgets( int/string $widget_id )`

**returns:** `string` 

Get widgets.

Name | Type | Description
---- | ---- | -----------
$widget_id | int/string | Optional. Index, name or ID of dynamic sidebar. Default 1.



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

**returns:** `\Timber\PostCollection` 

Query posts.

Name | Type | Description
---- | ---- | -----------
$query | bool | 
$PostClass | string | 



## render
`render( array/string $filenames, array $data=array(), bool $expires=false, string $cache_mode="default" )`

**returns:** `bool/string` The echoed output.

Render function. Passes data to a Twig file and echoes the output.

Name | Type | Description
---- | ---- | -----------
$filenames | array/string |  Name of the Twig file to render. If this is an array of files, Timber will
$data | array | 
$expires | bool | 
$cache_mode | string | 

###### PHP
```php
<?php
	$context = Timber::get_context();
		Timber::render( 'index.twig', $context );
```
	                                render the first file that exists.
	                                array, the first value is used for non-logged in visitors, the second for users.
	                                Default false.

## render_string
`render_string( string $string, array $data=array() )`

**returns:** `bool/string` 

Render a string with Twig variables.

Name | Type | Description
---- | ---- | -----------
$string | string | A string with Twig variables.
$data | array | 

###### PHP
```php
<?php
	$data = array(
	    'username' => 'Jane Doe',
	);
		Timber::render_string( 'Hi {{ username }}, I’m a string with a custom Twig variable', $data );
```

## init
`init( )`

**returns:** `void` 



## test_compatibility
`test_compatibility( )`

**returns:** `void` 

Tests whether we can use Timber






