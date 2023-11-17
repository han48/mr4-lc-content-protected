<script src="{{ asset('vendor/mr4-lc/content-protected/js/content-protected.js') }}"></script>
<link rel="stylesheet" href="{{ asset('vendor/mr4-lc/content-protected/css/content-protected.css') }}">
<div class="mr4-lc-content-protected {{ $id }} {{ $className ?? '' }}" data-content-id="{{ $id }}" data-mode="{{ $mode ?? 'closed' }}">
    <img src="{{ asset('vendor/mr4-lc/content-protected/img/loading.svg') }}" width="24px" height="24px" alt="Loading..." onload='LoadContentProtected(this.parentElement)'>
</div>
