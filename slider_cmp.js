var slider = (function(){
    var html = '<div><h4>Slider</h4></div>';
    var value = 0;
    var getVal = function(){
        return Number($(this).val());
    };
    var setVal = function(value){
        $(this).val(value);
    };
    var setHtml = function(){
        return html;
    };
    return {
        getVal       : getVal,
        setVal       : setVal,
        setHtml      : setHtml
    }
})();

jQuery.fn.extend({
  getComponent: function() {
        //$(this).html(slider.setHtml());
        return jQuery.extend( $(this), slider );
    }
});

/*
<div class="custom-range-parent">
    <span class="min custom-range-ruler">0</span>
    <span class="mid custom-range-ruler">25</span>
    <span class="max custom-range-ruler">49</span>

    <label for="range-slide-1" class="sr-only">Unidades</label>
    <input class="custom-range js-cmp-slider" id="range-slide-1" type="range" min="0" mid="25" max="49" step="1" value="0">
    <span class="custom-percent-bar custom-range-slider-bar" style="width: 10px;"></span>

    <div class="range-box-container" style="left: -20px; display: block;">
        <label for="range-box-1" class="sr-only">Unidades</label>
        <input id="range-box-1" type="text" class="range-box" value="" readonly="">
    </div>

    <div class="clearfix"></div>
</div>
*/

