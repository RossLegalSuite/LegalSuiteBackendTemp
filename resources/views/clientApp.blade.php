@extends('layouts.filofax')

@section('title', '')

<script>
    var loggedIn = true;
    var clientLoggedIn = true;

    <?php echo 'var firmCode = "' . session('firmCode') . '"';?>

</script>


@section('styles')

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/scroller/2.0.5/css/scroller.bootstrap4.min.css"/>

    <link rel="stylesheet" href="https://d22oktazhmwkct.cloudfront.net/css/jquery.contextMenu.min.css">


@endsection

@section('scripts')

    <script src="https://cdn.datatables.net/scroller/2.0.5/js/dataTables.scroller.min.js" defer></script>

    <script src="https://d22oktazhmwkct.cloudfront.net/js/jquery.contextMenu.min.js" defer></script>
    
    <script src="https://d22oktazhmwkct.cloudfront.net/jquery.highlight.js" defer></script>
    <script src="https://d22oktazhmwkct.cloudfront.net/tab-guard.js" defer></script>


    <!-- Adjustments for injected MultiSelect styles-->
    <style type="text/css">
        .multiselect, .multiselect__input, .multiselect__single {
            font-size: 0.7vw !important;
            margin-bottom: 2px !important;
        }
        .multiselect__placeholder {
            margin-bottom: 0px !important;
            padding-top: 0px !important;
        }
    </style>


@endsection