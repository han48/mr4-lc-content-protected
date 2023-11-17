Content protected editor extension for laravel-admin
======

This is a `laravel` component that integrates [Content protected].
Protected web content.

Mode open:
- Developer (and Crawler) can access tp shadow root.

Mode closed:
- Developer (and Crawler) can access tp shadow root.

## Screenshot
![Screenshot 2023-11-16 at 18 32 03](https://github.com/han48/mr4-lc.content-protected/assets/27817127/148d6921-94d4-4aa7-b4c4-b3c3a4fb7b6f)

## Installation
```bash
composer require mr4-lc/content-protected
php artisan vendor:publish --tag=mr4-lc-content-protected --force
```

## Configuration

## Usage
Example router:
```php
$router->get('content-protected', 'HomeController@getContentProtected')->name('content-protected.get');
```

Example controller:
```php
public function getContentProtected()
{
    $id = request()->get('id');
    return response("<span>This is protected content <u>$id</u></span>", 200);
}
```

Example usage
```blade
<form action="{{ route('content-protected.get') }}" method="GET" onsubmit="return false;">
    <x-mr4-lc.content-protected id="1" />
    <x-mr4-lc.content-protected id="2" mode="open"/>
    <x-mr4-lc.content-protected id="3" className="customize" />
</form>
```

Basic usage

```blade
<x-mr4-lc.content-protected id="1" />
```
=> 
```html
<div class="mr4-lc-content-protected 1 " data-content-id="1" data-mode="closed">
    #shadow-root (closed)
    <span>This is protected content <u>1</u></span>
</div>
```

Mode open

```blade
<x-mr4-lc.content-protected id="2" mode="open"/>
```
=> 
```html
<div class="mr4-lc-content-protected 2 " data-content-id="2" data-mode="open">
    #shadow-root (open)
    <span>This is protected content <u>2</u></span>
</div>
```

Customize CSS

```blade
<x-mr4-lc.content-protected id="3" className="customize" />
```
=> 
```html
<div class="mr4-lc-content-protected 2 customize" data-content-id="3" data-mode="closed">
    #shadow-root (closed)
    <span>This is protected content <u>3</u></span>
</div>
```

## License
Licensed under The [MIT License (MIT)](https://github.com/han48/mr4-lc.content-protected/blob/main/LICENSE).
