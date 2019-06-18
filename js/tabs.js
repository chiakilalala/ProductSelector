$(function() {
	var SearchTabBox=$(".SearchTabBox"),
	SearchTabHeadings=$(".SearchTabBox .SearchTabHeadings"),
	SearchTabContents=$(".SearchTabBox .SearchTabContents"),
	ProductLineBtn=$(".SearchTabBox .SearchTabContents #ProductLine .ProductLineByn");
	$(SearchTabHeadings).on("click",'.heading',function(e){
		$(this).addClass('on').siblings().removeClass('on');
		$(SearchTabContents).find('#'+$(this).data('tab')).addClass('on').siblings().removeClass('on');
		if($(this).data('tab')=='ProductLine'){
            $('.Product_Search,#Find_load,#Reset_load,#ParametersHide').show();
            $(SearchTabBox).css('margin-bottom','');
		}else if($(this).data('tab')=='PartNumber'){
            $('.Product_Search,#Find_load,#Reset_load,#ParametersHide,#ParametersShow').hide();
            $(SearchTabBox).css('margin-bottom','78px');
		}
    });
	$(SearchTabContents).on("click",'#ProductLine .ProductLineByn',function(e){
        $(this).addClass('select').siblings('.ProductLineByn').removeClass('select');
        var itemIndex=$(this).parent().children().index($(this));
        if(itemIndex%2){
            $('#Block_wrapper .Block_scrool .Block').hide().eq(itemIndex).show().end().eq(itemIndex-1).show().end().eq(itemIndex+1).show().end().eq(itemIndex+2).show();
        }else{
            $('#Block_wrapper .Block_scrool .Block').hide().eq(itemIndex).show().end().eq(itemIndex-1).show().end().eq(itemIndex+1).show();
        }
    }).on("submit",'#PartNumber form',function(e){
        e.preventDefault();
        $('#Find_load').click();
    });
    
    var ParametersArea=$('.Product_Search');
    $('#ParametersShow').on("click",function(e){
		$(ParametersArea).show();
        $('#ParametersShow').hide();
        $('#ParametersHide').show();
    });
    $('#ParametersHide').on("click",function(e){
		$(ParametersArea).hide();
        $('#ParametersShow').show();
        $('#ParametersHide').hide();
    });
});