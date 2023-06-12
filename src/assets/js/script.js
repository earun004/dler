// jQuery Syntex Start
$(document).ready(function(){	
	
	// toggle menu
	$('.toggle_menu_btn').click(function(){
		$('.toggle_menu_box').toggleClass('trf_scaleY0');
		$('.toggle_menu_box').toggleClass('trf_scaleY1');
	});
	
	// side menu open close
	$('.mob_side_menu_btn_cls').click(function(){
		$('.mob_side_menu_btn_cls').addClass('dNone');
		$('.mob_side_menu_btn_opn').removeClass('dNone');
		$('.sidebar_menu').toggleClass('trf_scaleX0');
		$('.sidebar_menu').toggleClass('trf_scaleX1');
		$('.sidebar_menu').toggleClass('w0');
		$('.main_body').toggleClass('w100');
		$('.headerLogo').addClass('dBlock');
		
		$('.sidebar_menu_icon').removeClass('disNone');
		$('.sidebar_menu_icon').toggleClass('icon_scaleX1');
	});
	$('.mob_side_menu_btn_opn').click(function(){
		$('.mob_side_menu_btn_opn').addClass('dNone');
		$('.mob_side_menu_btn_cls').removeClass('dNone');
		$('.sidebar_menu').toggleClass('trf_scaleX0');
		$('.sidebar_menu').toggleClass('trf_scaleX1');
		$('.sidebar_menu').toggleClass('w0');
		$('.main_body').toggleClass('w100');
		$('.headerLogo').removeClass('dBlock');
		
		$('.sidebar_menu_icon').addClass('disNone');
		$('.sidebar_menu_icon').toggleClass('icon_scaleX1');
	});
	
	$('.mob_side_menu_btn_cls2').click(function(){
		$('.sidebar_menu').toggleClass('mobMenuOpen');
	});
	$('.mob_side_menu_btn_opn2').click(function(){
		$('.sidebar_menu').toggleClass('mobMenuOpen');
	});
		

	
	// menu sub menu icon rotation
	$('.menu_item').each(function(){
		$(this).click(function(){
			if($(this).children('.collapseIcon').hasClass('collapsRotate')){
				$('.menu_item .collapsRotate').removeClass('collapsRotate');
			}else{
				$(this).children('.collapseIcon').addClass('collapsRotate');
			}
		});
	 });
	// double dropdown menu icon rotation
	$('.sub_menu_item').each(function(){
		$(this).click(function(){
			if($(this).children('.collapseIcon').hasClass('collapsRotate')){
				$('.sub_menu_item .collapsRotate').removeClass('collapsRotate');
			}else{
				$(this).children('.collapseIcon').addClass('collapsRotate');
			}
		});
	 });
	
	// icon menu items
	$('.sidebar_menu_icon_item').each(function(){
		$(this).click(function(){
			var getVal = Number($(this).attr('clkVal'));
			if(getVal == 0){
				$('.sidebar_menu_icon_item .iconMenuItem').removeClass('trf_scaleX1');
				$('.sidebar_menu_icon_item .iconMenuItem').addClass('trf_scaleX0');
				$('.sidebar_menu_icon_item').attr('clkVal','0');
				$(this).children('.iconMenuItem').removeClass('trf_scaleX0');
				$(this).children('.iconMenuItem').addClass('trf_scaleX1');
				$(this).attr('clkVal','1');
			}else{
				$('.sidebar_menu_icon_item .iconMenuItem').removeClass('trf_scaleX1');
				$('.sidebar_menu_icon_item .iconMenuItem').addClass('trf_scaleX0');
				$('.sidebar_menu_icon_item').attr('clkVal','0');
				$(this).children('.iconMenuItem').removeClass('trf_scaleX1');
				$(this).children('.iconMenuItem').addClass('trf_scaleX0');
			}
		});
	});
	
	
	// my service page input box increase
	
	$('.plusBoxBtn').click(function(){
		var getBoxNumber = $(this).attr('servBoxCount');
		var createInputBox = '<div class="w-100 diBlock servBoxRemove"><div class="up_serv_item float-left pr-1"><input type="text" name="inpBox'+getBoxNumber+'" class="form-control mb-1" placeholder="type here" /></div><span class="btn btn-danger h6 servBoxBtn" title="Remove"><i class="fas fa-trash"></i></span></div>';
		$('.plusServBox').append(createInputBox);
		var incBtn = Number(getBoxNumber)+1;
		$(this).attr('servBoxCount',incBtn);
		
		$('.servBoxRemove .servBoxBtn').each(function(){
			$(this).click(function(){
				$(this).parent('.servBoxRemove').remove();
			});
		});
	});
	
	// Membership Management page input box family increase start
	$('#memManAddBtn').click(function(){
		var getBoxNumber = $(this).attr('memBoxFamilyCount');
		
		var memManageFamily =	'<div class="membership_plan_box">'
									+'<div class="membership_plan_item">'
										+'<div class="membership_plan_label h6 pt-2">'
											+'<label for="">Plan Code*</label>'
										+'</div>'
										+'<div class="membership_plan_input">'
											+'<input type="text" name="planCode'+getBoxNumber+'" class="form-control" required >'
										+'</div>'
									+'</div>'
									+'<div class="membership_plan_item">'
										+'<div class="membership_plan_label h6 pt-2">'
											+'<label for="">Number of days*</label>'
										+'</div>'
										+'<div class="membership_plan_input">'
											+'<input type="number" name="nod'+getBoxNumber+'" class="form-control" required >'
										+'</div>'
									+'</div>'
									+'<div class="membership_plan_item">'
										+'<div class="membership_plan_label h6 pt-2">'
											+'<label for="">Amount*</label>'
										+'</div>'
										+'<div class="membership_plan_input">'
											+'<input type="number" name="amount'+getBoxNumber+'" class="form-control" required >'
										+'</div>'
									+'</div>'
									+'<div class="membership_plan_item">'
										+'<span class="h6 btn btn-sm btn-danger memManRemoveBtn" title="Remove">'
											+'<i class="fas fa-trash"></i>'
										+'</span>'
									+'</div>'
								+'</div>';
							
		$('.membership_manage_wrapper').append(memManageFamily);
		var incBtn = Number(getBoxNumber)+1;
		$(this).attr('memBoxFamilyCount',incBtn);
		
		
		$('.membership_plan_box .membership_plan_item .memManRemoveBtn').each(function(){
			$(this).click(function(){
				$(this).parent('.membership_plan_item').parent('.membership_plan_box').remove();
			});
		});
		
	});
	
	// Membership Management page input box family increase start
	
	// Diagnostic center profile update page start
	$('#diaProfileActype1').click(function(){
		
		$('.diaProUpSel').addClass('dNone');
		$('#diaProUpdateSelect').attr('disabled','disabled');
		
		$('.diaProAddBox').removeClass('dNone');
		$('.diaProAddNew').removeAttr('disabled');
		
		$('.diaProAddBtn').removeAttr('disabled');
		$('.diaProAddBtn').removeClass('dNone');
		
		$('.diaProUpdBtn').attr('disabled','disabled');
		$('.diaProUpdBtn').addClass('dNone');
	});
	
	$('#diaProfileActype2').click(function(){
		$('.diaProAddBox').addClass('dNone');
		$('.diaProAddNew').attr('disabled','disabled');
		
		$('.diaProUpSel').removeClass('dNone');
		$('#diaProUpdateSelect').removeAttr('disabled');
		
		$('.diaProAddBtn').attr('disabled','disabled');
		$('.diaProAddBtn').addClass('dNone');
		
		$('.diaProUpdBtn').removeAttr('disabled');
		$('.diaProUpdBtn').removeClass('dNone');
	});
	// Diagnostic center profile update page end

	//Distributor dashboard start
	$('.dis_search_item_details .detail_show_btn').each(function(){
		$(this).click(function(){
			
			$('.dis_search_item_details .detail_show_btn').removeClass('dNone');
			$(this).addClass('dNone');
			
			$('.dis_search_item_details .detail_hide_btn').addClass('dNone');
			$(this).parent('td').children('.detail_hide_btn').removeClass('dNone');
			
			$('.dis_order_search_item_details').addClass('dNone');
			
			var getDetailBoxId = $(this).attr('data-show-id');
			$(getDetailBoxId).toggleClass('dNone');
			
		});		
	});
	
	$('.dis_search_item_details .detail_hide_btn').each(function(){
		$(this).click(function(){
			$(this).parent('td').children('.detail_hide_btn').addClass('dNone');
			$(this).parent('td').children('.detail_show_btn').removeClass('dNone');
			
			$('.dis_order_search_item_details').addClass('dNone');
		});
	});
	
	
	//Distributor dashboard end
	
	
	// Change password page start
	
	function resetPwdInpt(clickBtn,pwdBox){
		$(clickBtn).click(function(){
			$(this).children('i').toggleClass('fa-eye-slash');
			$(this).children('i').toggleClass('fa-eye');
			var getTitle = $(this).attr('title');
			if(getTitle == 'Show Password'){
				$(this).attr('title','Hide Password');
			}else{
				$(this).attr('title','Show Password');
			}
			var pwdBoxType = $(pwdBox).attr('type');
			if(pwdBoxType == 'password'){
				$(pwdBox).attr('type','text');
			}else{
				
				$(pwdBox).attr('type','password');
			}
		});
	}
	resetPwdInpt('.showPwd','#oldPwdBox');
	resetPwdInpt('.showPwd','#newPwdBox');
	resetPwdInpt('.showPwd','#reNewPwdBox');
	
	function checkConPwd(inptNewId,inputConId){
		$(inptNewId).keyup(function(){
			var getNewPwdVal = $(this).val();
			var getConPwdVal = $(inputConId).val();
			if(getConPwdVal == getNewPwdVal){
				$('.pwdMatchAlert').addClass('dNone');
				$('.changePwdBtn').removeAttr('disabled');
			}else{
				$('.pwdMatchAlert').removeClass('dNone');
				$('.changePwdBtn').attr('disabled','disabled');
			}
		});
	}
	function checkConPwd(inptNewId,inputConId){
		$(inptNewId).change(function(){
			var getNewPwdVal = $(this).val();
			var getConPwdVal = $(inputConId).val();
			if(getConPwdVal == getNewPwdVal){
				$('.pwdMatchAlert').addClass('dNone');
				$('.changePwdBtn').removeAttr('disabled');
			}else{
				$('.pwdMatchAlert').removeClass('dNone');
				$('.changePwdBtn').attr('disabled','disabled');
			}
		});
	}
	
	checkConPwd('#reNewPwdBox','#newPwdBox');
	checkConPwd('#newPwdBox','reNewPwdBox');
	
	$('.changePwdBtn').click(function(){
		var getNewPwd = $('#newPwdBox').val();
		var getConPwd = $('#reNewPwdBox').val();
		
		if(getNewPwd == getConPwd){
			$('.pwdMatchAlert').addClass('dNone');
			$(this).removeAttr('disabled');
		}else{
			$('.pwdMatchAlert').removeClass('dNone');
			$(this).attr('disabled','disabled');
		}
	});
	
	// Change password page end
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
})// jQuery Syntex End
