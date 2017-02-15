
# Timber\User
This is used in Timber to represent users retrived from WordPress. You can call `$my_user = new Timber\User(123);` directly, or access it through the `{{ post.author }}` method.

###### PHP
```php
<?php
$context['current_user'] = new Timber\User();
$context['post'] = new Timber\Post();
Timber::render('single.twig', $context);
```
###### Twig
```twig
<p class="current-user-info">Your name is {{ current_user.name }}</p>
<p class="article-info">This article is called "{{ post.title }}" and it's by {{ post.author.name }}
```
###### HTML
```html
<p class="current-user-info">Your name is Jesse Eisenberg</p>
<p class="article-info">This article is called "Consider the Lobster" and it's by David Foster Wallace
```

Name | Type | Description
---- | ---- | -----------
avatar | string|Image | The URL of the author's avatar
description | string | The description from WordPress
first_name | string | The first name of the user
id | int | The ID from WordPress
last_name | string | The last name of the user
[link](#link) | string | http://example.org/author/lincoln
[name](#name) | string | the human-friendly name of the user (ex: "Buster Bluth")
[path](#path) | string | ex: /author/lincoln
[slug](#slug) | string | ex baberaham-lincoln

## __construct
`__construct( bool/object/int/bool $uid=false )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$uid | bool/object/int/bool | 



## __toString
`__toString( )`

**returns:** `string` a fallback for TimberUser::name()

###### Twig
```twig
	This post is by {{ post.author }}
```
###### HTML
```html
	This post is by Jared Novack
```

## get_custom
`get_custom( )`

**returns:** `array/null` 



## get_meta_field
`get_meta_field( string $field_name )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$field_name | string | 



## link
`link( )`

**returns:** `string` http://example.org/author/lincoln



## meta
`meta( string $field_name )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$field_name | string | 



## name
`name( )`

**returns:** `string` the human-friendly name of the user (ex: "Buster Bluth")



## path
`path( )`

**returns:** `string` ex: /author/lincoln



## slug
`slug( )`

**returns:** `string` ex baberaham-lincoln






*This class extends \Timber\Core*

*This class implements \Timber\CoreInterface*

