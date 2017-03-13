<?php header("Content-type: application/pdf");
header("Content-Disposition: inline; filename=PrivacyPolicy.pdf");
@readfile('PrivacyPolicy.pdf'); ?>