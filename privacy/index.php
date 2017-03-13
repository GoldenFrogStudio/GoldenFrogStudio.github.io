<?php header("Content-type: application/pdf");
header("Content-Disposition: inline; filename=privacypolicy.pdf");
@readfile('privacypolicy.pdf'); ?>