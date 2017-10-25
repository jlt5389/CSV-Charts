<html>
<head>
    <title>Assero Services LLC Digital Signage Display</title>
    <link rel="stylesheet" type="text/css" href="../css/slide_style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <?php
        include '../models/csvmodel.php';
        $csv_var = csv_open("../data/fnma_sc_20171018.csv");
        $canvas_margins = array("top"=>0,"left"=>50,"right"=>100,"bottom"=>50);
        $canvas_title = array("color"=>'black',"size"=>36,"padding"=>20);
    ?>
</head>
<body>
    <div id="widget_contain" class="">
        <div id="header" class="">
            <div id="logo_left" class=""><img src="../images/logos/asseroLogo.png"></div>
            <div id="title_center" class=""><h1><?php echo $csv_var[1][1]; ?></h1></div>
            <div id="logo_right" class=""></div>
        </div>
        <div class="widget" class="">
            <canvas id="myChart" class=""></canvas>
        </div>
    </div>

    <script type="text/javascript">
        var csv = '<?php echo json_encode($csv_var); ?>';
        var canvas_margins = '<?php echo json_encode($canvas_margins); ?>';
        var canvas_title = '<?php echo json_encode($canvas_title); ?>';
        csv = JSON.parse(csv);
        canvas_margins = JSON.parse(canvas_margins);
        canvas_title = JSON.parse(canvas_title);
        var slide_index = 0;
    </script>

    <script type="text/javascript" src="../javascript/completed_initial_service_bar.js"></script>
    <script type="text/javascript" src="../javascript/completed_initial_service_stacked-bar.js"></script>
    <script type="text/javascript" src="../javascript/average_days_initial_service_line.js"></script>
    <script type="text/javascript" src="../javascript/average_days_bso_line.js"></script>
    <script type="text/javascript" src="../javascript/completed_initial_g10_line.js"></script>
    <script type="text/javascript" src="../javascript/completed_initial_qc_bar.js"></script>

    <script type="text/javascript">
        completed_initial_services();
        try {
            setInterval(function(){run();}, 15000);
        } catch(err) {
            console.log(err);
        }

        function clear_canvas(canvas_id) {
            chart.destroy(); // destroy existing chart
            $('#myChart').remove(); // destroy existing canvas
            $('.widget').append('<canvas id="myChart" class=""></canvas>'); // new canvas
        }
        function run() {
            switch(slide_index) {
                case 0:
                    clear_canvas();
                    completed_initial_services();
                    break;
                case 1:
                    clear_canvas();
                    completed_initial_services_stack();
                    break;
                case 2:
                    clear_canvas();
                    average_days_initial_services();
                    break;
                case 3:
                    clear_canvas();
                    average_days_bso();
                    break;
                case 4:
                    clear_canvas();
                    completed_initial_g10();
                    break;
                case 5:
                    clear_canvas();
                    completed_initial_qc();
                    slide_index = 0;
                    break;
            }
        }
    </script>

</body>
</html>
