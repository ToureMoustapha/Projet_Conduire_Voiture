// JavaScript Document
$('document').ready(function(e){

	var  demarrer = false,lampeDerriereEteinte = true,lampeDevantEteinte = true,
	     seTrouveSurRoute1=true,seTrouveSurRouteVerticale1=false,
	     pointFinalDroiteRoute1 = 780,distanceRestanteDroiteRoute1 = 775,
		 pointFinalGaucheRoute1 = 5,distanceRestanteGaucheRoute1 = 0,
		 temps1VersDroiteRoute1 = 0,temps2VersDroiteRoute1 = 0,dureeEnleveeRoute1 = 0,
		 temps1VersGaucheRoute1 = 0,temps2VersGaucheRoute1 = 0,
		 
		 seTrouveSurRoute2=false,seTrouveSurRouteVerticale2=false,
		 pointFinalGaucheRoute2 = 100,distanceRestanteGaucheRoute2 = 642,
		 pointFinalDroiteRoute2 = 742,distanceRestanteDroiteRoute2 = 0,
		 temps1VersGaucheRoute2 = 0,temps2VersGaucheRoute2 = 0,dureeEnleveeRoute2 = 0,
		 temps1VersDroiteRoute2 = 0,temps2VersDroiteRoute2 = 0,
		 
		 seTrouveSurRoute3=false,
	     pointFinalDroiteRoute3 = 580,distanceRestanteDroiteRoute3 = 452,
		 pointFinalGaucheRoute3 = 128,distanceRestanteGaucheRoute3 = 0,
		 temps1VersDroiteRoute3 = 0,temps2VersDroiteRoute3 = 0,dureeEnleveeRoute3 = 0,
		 temps1VersGaucheRoute3 = 0,temps2VersGaucheRoute3 = 0,
		 
		 vitesse=10000,vitesse2=9000,vitesse3=8000,valeurAncienneSlider =0, valeurActuelleSlider = 0;
		 /*var mini = $('.slider').attr('min');
		  var maxi = $('.slider').attr('max');*/
	    $('#accelerateur').on('change',function(){
		   valeurActuelleSlider = $('#accelerateur').val();
		   /*alert(valeurAncienneSlider);
		   alert(valeurActuelleSlider);*/
		   if(seTrouveSurRoute1)
			   if(valeurActuelleSlider >= 50){
					 vitesse -= valeurActuelleSlider*80;
					 vitesse2 -= valeurActuelleSlider*80;
					 vitesse3 -= valeurActuelleSlider*80;
				   }
			   else{
			        vitesse += valeurActuelleSlider*80;
					vitesse2 += valeurActuelleSlider*80;
				    vitesse3 += valeurActuelleSlider*80;
			       }  
			valeurAncienneSlider = valeurActuelleSlider;
		});

$("#demarrer").click(function(){
    if(demarrer)
    {
      demarrer = false;
    }
    else
    {
      demarrer = true;
    }
});
   
	$("#lampeDerriere").click(function(){
	 if(lampeDerriereEteinte)
	 	  {
	    	 $("#lampeDerriere1").attr("src","lampeDerriere2.jpg");
             lampeDerriereEteinte = false;
	 	  }
	   else
	   {
	   	  $("#lampeDerriere1").attr("src","lampeDerriere1.jpg"); 
	   	  lampeDerriereEteinte = true;
	   }

	 if(seTrouveSurRoute1 || seTrouveSurRouteVerticale1 || seTrouveSurRoute3)
       $(".lampeArr").toggle(500);
	 else
	      $(".lampeArr2").toggle(500);    
    });

    $("#lampeDevant").click(function(){
     if(lampeDevantEteinte)
     {
	   	$("#lampeDevant1").attr("src","lampeDevant2.jpg");
	   	lampeDevantEteinte = false;
     }
	   else
	   {
	   	  $("#lampeDevant1").attr("src","lampeDevant1.jpg");
	   	  lampeDevantEteinte = true;
	   }

	 if(seTrouveSurRoute1 || seTrouveSurRouteVerticale1 || seTrouveSurRoute3)
	   $(".lampeDev").toggle(500);
	 else
	       $(".lampeDev2").toggle(500);
    });

	$.keyframe.define([{
	name: 'tournerVersDroite',
      '100%': {
        'left': '857px',
		'top' : '120px',
		transform    : 'rotate(90deg)'
      }
    },
	{
	name: 'retourDeTournerVersDroite',
      '0%': {
        'left': '857px',
		'top' : '120px',
		transform    : 'rotate(90deg)'
      },
	  '100%': {
        'left': '780px',
		'top' : '5px',
      }
    },
	 {
	name: 'tournerVersGauche',
      '100%': {
		'top' : '260px',
		'left' : '10px',
		transform    : 'rotate(-90deg)'
      }
    },
	{
	name: 'retourDeTournerVersGauche',
      '0%': {
        'left': '10px',
		'top' : '260px',
		transform    : 'rotate(-90deg)'
      },
	  '100%': {
        'left': '100px',
		'top' : '152px',
      }
    },
	 {
      name: 'roterDroitePneu',
      from: {
        'transform': 'rotate(0deg)'
      },
      to: {
        'transform': 'rotate(360deg)'
      }
	 },
	  {
      name: 'roterGauchePneu',
      from: {
        'transform': 'rotate(0deg)'
      },
      to: {
        'transform': 'rotate(-360deg)'
      }
     }
	]);
	
    $('#avancer').on({
		mousedown : function(){
			         if(demarrer){
					   $("#avancer1").attr("src","avancer2.jpg");
				         if(seTrouveSurRoute1){
							 if($('.blocAdeplacer').position().left!=780){
							 $('.roue1').playKeyframe({
											name: 'roterDroitePneu',
											duration: '3s',
											timingFunction: 'linear',
											iterationCount: 'infinite',
											complete: function(){}
										 });
							 $('.roue2').playKeyframe({
								name: 'roterDroitePneu', 
								duration: '3s',
								timingFunction: 'linear',
								iterationCount: 'infinite',
								complete: function(){}
							 });
							 }
							temps1VersDroiteRoute1 = new Date().getTime();
							$('.blocAdeplacer').animate({
								left : '+=' + distanceRestanteDroiteRoute1 + 'px'
								},{
									duration : vitesse - dureeEnleveeRoute1,
									easing : 'linear',
									complete : function(){dureeEnleveeRoute1 = vitesse;}
								  });
							  }
						 else //Pas se trouver sur route1
							  if(seTrouveSurRoute2){
								  if($('.blocAdeplacer2').position().left!=125){
									 $('.roue1_2').playKeyframe({
													name: 'roterGauchePneu',
													duration: '3s',
													timingFunction: 'linear',
													iterationCount: 'infinite',
													complete: function(){}
												 });
									 $('.roue2_2').playKeyframe({
										name: 'roterGauchePneu',
										duration: '3s',
										timingFunction: 'linear',
										iterationCount: 'infinite',
										complete: function(){}
									 });
							        }
								temps1VersGaucheRoute2 = new Date().getTime();
								$('.blocAdeplacer2').animate({
									left : '-=' + distanceRestanteGaucheRoute2 + 'px'
									},{
										duration : vitesse2 - dureeEnleveeRoute2,
										easing : 'linear',
										complete : function(){dureeEnleveeRoute2 = vitesse2;}
									  });
							 }
							 else
								 if(seTrouveSurRoute3){
									 if($('.blocAdeplacer3').position().left!=580){
									 $('.roue1').playKeyframe({
													name: 'roterDroitePneu',
													duration: '3s',
													timingFunction: 'linear',
													iterationCount: 'infinite',
													complete: function(){}
												 });
									 $('.roue2').playKeyframe({
										name: 'roterDroitePneu', 
										duration: '3s',
										timingFunction: 'linear',
										iterationCount: 'infinite',
										complete: function(){}
									 });
									 }
									temps1VersDroiteRoute3 = new Date().getTime();
									$('.blocAdeplacer3').animate({
										left : '+=' + distanceRestanteDroiteRoute3 + 'px'
										},{
											duration : vitesse3 - dureeEnleveeRoute3,
											easing : 'linear',
											complete : function(){dureeEnleveeRoute3 = vitesse3;}
										  });
								}
					 }
					},
					
		mouseup : function(){
			        if(demarrer){
			           $("#avancer1").attr("src","avancer1.jpg");
					   if(seTrouveSurRoute1){
						      $('.blocAdeplacer').stop();
							   $('.roue1').pauseKeyframe();
							   $('.roue2').pauseKeyframe();
							   temps2VersDroiteRoute1 = new Date().getTime();
							   dureeEnleveeRoute1 += (temps2VersDroiteRoute1 - temps1VersDroiteRoute1);
							   distanceRestanteDroiteRoute1 = pointFinalDroiteRoute1 - $('.blocAdeplacer').position().left;
							   distanceRestanteGaucheRoute1 = $('.blocAdeplacer').position().left - pointFinalGaucheRoute1;
					          }
						else
						   if(seTrouveSurRouteVerticale1){
								   pauseRouteVerticale1 = true;
								   distanceRestanteRouteVerticale1 = pointFinalRouteVerticale1 - $('.blocAdeplacer').position().top;
								  }
						   else
						       if(seTrouveSurRoute2){
								   $('.blocAdeplacer2').stop();
								   $('.roue1_2').pauseKeyframe();
								   $('.roue2_2').pauseKeyframe();
								   temps2VersGaucheRoute2 = new Date().getTime();
								   dureeEnleveeRoute2 += (temps2VersGaucheRoute2 - temps1VersGaucheRoute2);
								   distanceRestanteGaucheRoute2 = $('.blocAdeplacer2').position().left - pointFinalGaucheRoute2;
								   distanceRestanteDroiteRoute2 = pointFinalDroiteRoute2 - $('.blocAdeplacer2').position().left;
								  }
							  else
							      if(seTrouveSurRoute3){
									  $('.blocAdeplacer3').stop();
									   $('.roue1').pauseKeyframe();
									   $('.roue2').pauseKeyframe();
									   temps2VersDroiteRoute3 = new Date().getTime();
									   dureeEnleveeRoute3 += (temps2VersDroiteRoute3 - temps1VersDroiteRoute3);
									   distanceRestanteDroiteRoute3 = pointFinalDroiteRoute3 - $('.blocAdeplacer3').position().left;
									   distanceRestanteGaucheRoute3 = $('.blocAdeplacer3').position().left - pointFinalGaucheRoute3;
									  }
						}
				  }
		
		});
	
	$('#tournerDroite').on({
		mousedown : function(){
			          if(demarrer){
			          $("#tournerDroite1").attr("src","tournerDroite2.jpg");
			          if(seTrouveSurRoute1){
			          if($('.blocAdeplacer').position().left==780){
						    $('.blocAdeplacer').hide(0,'linear');
							$('.blocAdeplacer_1').show(0,'linear');
						    $('.blocAdeplacer_1').playKeyframe({
													name: 'tournerVersDroite',
													duration: "1s",
													timingFunction: 'linear',
													complete: function(){
													    distanceRestanteDroiteRoute1 = 0;
														distanceRestanteGaucheRoute1 = 775;
														seTrouveSurRoute1=false;
														seTrouveSurRouteVerticale1=true;
														$("#tournerDroite1").attr("src","tournerDroite1.jpg");
														}
												  });	  
						   }
					      }
					   else
						   if(seTrouveSurRouteVerticale1){
								 $('.blocAdeplacer_1').hide(0,'linear',function(){
									            seTrouveSurRouteVerticale1 = false;
												seTrouveSurRoute2=true;
									 });
								 $('.blocAdeplacer2').show(0,'linear');
								 $("#tournerDroite1").attr("src","tournerDroite1.jpg");
					       }
						   if(seTrouveSurRouteVerticale2){
								 if($('.blocAdeplacer2_1').position().left==32.5){
									$('.blocAdeplacer2_1').playKeyframe({
															name: 'retourDeTournerVersGauche',
															duration: "1s",
															timingFunction: 'linear',
															complete: function(){
																distanceRestanteDroiteRoute2 = 642;
																distanceRestanteGaucheRoute2 = 0;
																seTrouveSurRouteVerticale2=false;
																seTrouveSurRoute2=true;
																$('.blocAdeplacer2').show(0,'linear'); 
																$('.blocAdeplacer2_1').hide(0,'linear');
																$("#tournerDroite1").attr("src","tournerDroite1.jpg");			 
																}
														  });	
								   }
					       }
						   else
						        if(seTrouveSurRoute3){
						        if($('.blocAdeplacer3').position().left==128){
									   $('.blocAdeplacer2_1').show(0,'linear');
									   $('.blocAdeplacer3').hide(0,'linear');
									   seTrouveSurRouteVerticale2 = true;
									   seTrouveSurRout3=false;
									   }
								}
			         }
			     }
		});
		
		$('#tournerGauche').on({
		mousedown : function(){
			          if(demarrer){
			          $("#tournerGauche1").attr("src","tournerGauche2.jpg");
			          if(seTrouveSurRouteVerticale1){
			          if($('.blocAdeplacer_1').position().left==879.5){
						    $('.blocAdeplacer_1').playKeyframe({
													name: 'retourDeTournerVersDroite',
													duration: "1s",
													timingFunction: 'linear',
													complete: function(){
													    distanceRestanteDroiteRoute1 = 0;
														distanceRestanteGaucheRoute1 = 775;
														seTrouveSurRouteVerticale1=false;
														seTrouveSurRoute1=true;
														$('.blocAdeplacer').show(0,'linear'); 
											            $('.blocAdeplacer_1').hide(0,'linear');
							                            $("#tournerGauche1").attr("src","tournerGauche1.jpg");            
														}
												  });	
						   }
					      }
					   else
						  if(seTrouveSurRoute2){
						  if($('.blocAdeplacer2').position().left==100){
							  $('.blocAdeplacer2_1').show(0,'linear');
								$('.blocAdeplacer2').hide(0,'linear');
								$('.blocAdeplacer2_1').playKeyframe({
														name: 'tournerVersGauche',
														duration: "1s",
														timingFunction: 'linear',
														complete: function(){
															distanceRestanteGaucheRoute2 = 0;
															distanceRestanteDroiteRoute2 = 642;
															seTrouveSurRoute2=false;
															seTrouveSurRouteVerticale2=true;
															$("#tournerGauche1").attr("src","tournerGauche1.jpg");
															}
													  });	  
							   }
							   else
							       if(seTrouveSurRoute3){ 
							       if($('.blocAdeplacer2').position().left==742){
									   $('.blocAdeplacer_1').show(0,'linear');
									   $('.blocAdeplacer2').hide(0,'linear');
									   seTrouveSurRouteVerticale1 = true;
									   seTrouveSurRoute2=false;
									   }
									}
							  }
					   else
						   if(seTrouveSurRouteVerticale2){
								 $('.blocAdeplacer2_1').hide(0,'linear',function(){
									            seTrouveSurRouteVerticale2 = false;
												seTrouveSurRoute3=true;
									 });
								 $('.blocAdeplacer3').show(0,'linear');
								 $("#tournerGauche1").attr("src","tournerGauche1.jpg");
					       }
			         }
			     }
		});
		
	$('#arriere').on({
		mousedown : function(){
		              if(demarrer){
		              $("#arriere1").attr("src","arriere2.jpg");
			          if(seTrouveSurRoute1){
						 $('.roue1').playKeyframe({
										name: 'roterGauchePneu',
										duration:'3s',
										timingFunction: 'linear',
										iterationCount: 'infinite',
										complete: function(){}
									 });
						 $('.roue2').playKeyframe({
							name: 'roterGauchePneu',
							duration: '3s',
							timingFunction: 'linear',
							iterationCount: 'infinite',
							complete: function(){}
						 });
						temps1VersGaucheRoute1 = new Date().getTime();
						$('.blocAdeplacer').animate({
							left : '-='+distanceRestanteGaucheRoute1+'px'
							},{
								duration : dureeEnleveeRoute1,
								easing : 'linear',
								complete : function(){
									}
							   }
						);
					  }
					  else
					      if(seTrouveSurRoute2){
								$('.roue1_2').playKeyframe({
											name: 'roterDroitePneu',
											duration:'3s',
											timingFunction: 'linear',
											iterationCount: 'infinite',
											complete: function(){}
										 });
							 $('.roue2_2').playKeyframe({
								name: 'roterDroitePneu',
								duration: '3s',
								timingFunction: 'linear',
								iterationCount: 'infinite',
								complete: function(){}
							 });
							temps1VersDroiteRoute2 = new Date().getTime();
							$('.blocAdeplacer2').animate({
								left : '+=' + distanceRestanteDroiteRoute2+'px'
								},{
									duration : dureeEnleveeRoute2,
									easing : 'linear',
									complete : function(){
										}
								   }
							); 
							  }
						  else
							  if(seTrouveSurRoute3){
								 $('.roue1').playKeyframe({
												name: 'roterGauchePneu',
												duration:'3s',
												timingFunction: 'linear',
												iterationCount: 'infinite',
												complete: function(){}
											 });
								 $('.roue2').playKeyframe({
									name: 'roterGauchePneu',
									duration: '3s',
									timingFunction: 'linear',
									iterationCount: 'infinite',
									complete: function(){}
								 });
								temps1VersGaucheRoute3 = new Date().getTime();
								$('.blocAdeplacer3').animate({
									left : '-='+distanceRestanteGaucheRoute3+'px'
									},{
										duration : dureeEnleveeRoute3,
										easing : 'linear',
										complete : function(){
											}
									   }
								);
							  }
					  }
	             },
		mouseup   : function(){
			        if(demarrer){
			        $("#arriere1").attr("src","arriere1.jpg");
				    if(seTrouveSurRoute1){
						$('.blocAdeplacer').stop();
						$('.roue1').pauseKeyframe();
						$('.roue2').pauseKeyframe();
						temps2VersGaucheRoute1 = new Date().getTime();
						dureeEnleveeRoute1 -= (temps2VersGaucheRoute1 - temps1VersGaucheRoute1);
						distanceRestanteGaucheRoute1 = $('.blocAdeplacer').position().left - pointFinalGaucheRoute1;
						distanceRestanteDroiteRoute1 = pointFinalDroiteRoute1 - $('.blocAdeplacer').position().left;
					    }
					else
					     if(seTrouveSurRoute2){
							$('.blocAdeplacer2').stop();
							$('.roue1_2').pauseKeyframe();
							$('.roue2_2').pauseKeyframe();
							 temps2VersDroiteRoute2 = new Date().getTime();
							dureeEnleveeRoute2 -= (temps2VersDroiteRoute2 - temps1VersDroiteRoute2);
							distanceRestanteGaucheRoute2 = $('.blocAdeplacer2').position().left - pointFinalGaucheRoute2;
							distanceRestanteDroiteRoute2 = pointFinalDroiteRoute2 - $('.blocAdeplacer2').position().left;
							 }
						 else
						      if(seTrouveSurRoute3){
									$('.blocAdeplacer3').stop();
									$('.roue1').pauseKeyframe();
									$('.roue2').pauseKeyframe();
									temps2VersGaucheRoute3 = new Date().getTime();
									dureeEnleveeRoute3 -= (temps2VersGaucheRoute3 - temps1VersGaucheRoute3);
									distanceRestanteGaucheRoute3 = $('.blocAdeplacer3').position().left - pointFinalGaucheRoute3;
									distanceRestanteDroiteRoute3 = pointFinalDroiteRoute3 - $('.blocAdeplacer3').position().left;
					           }
		           }
		       }
		});
});