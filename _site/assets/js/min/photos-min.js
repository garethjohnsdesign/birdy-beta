$(document).foundation(),$("#toggle").click(function(){$(this).toggleClass("active"),$("#overlay").toggleClass("open")}),$(document).ready(function(){wow=new WOW({boxClass:"wow",animateClass:"animated",offset:200,mobile:!0,live:!0}),wow.init()}),$(document).ready(function(){var e=new Instafeed({target:"instafeed",get:"user",userId:476346188,accessToken:"476346188.1677ed0.5e02bdd9f46647938e909282cd4c7ddd",template:'<div class="small-6 medium-4 large-3 columns"><a href="{{image}}" data-lity><img src="{{image}}" /><div class="insta_caption">{{caption}}</div></a></div>',limit:24,resolution:"standard_resolution"});e.run()});