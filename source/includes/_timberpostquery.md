
# Timber\PostQuery
A PostQuery allows a user to query for a Collection of WordPress Posts. PostCollections are used directly in Twig templates to iterate through and retrieve meta information about the collection of posts



Name | Type | Description
---- | ---- | -----------

## __construct
`__construct( bool $query=false, string $post_class="\Timber\Post" )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$query | bool | 
$post_class | string | 



## pagination
`pagination( array/	array $prefs=array() )`

**returns:** `Timber\Pagination` object

Set pagination for the collection. Optionally could be used to get pagination with custom preferences.

Name | Type | Description
---- | ---- | -----------
$prefs | array/	array | 



## get_query
`get_query( )`

**returns:** `mixed` the query the user orignally passed to the pagination object






*This class extends \Timber\PostCollection*

*This class implements \IteratorAggregate, \Traversable, \ArrayAccess, \Serializable, \Countable*

