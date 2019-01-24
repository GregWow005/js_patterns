var renderizator = (function(){
    var Render = function(){
        setHtml();
    };
    var setHtml = function(){
        $('.js-cmp').each(function (i, obj) { 
             console.log('COMMENT: ', i,obj);
             var this_slider = $(obj);
             if($(obj).hasClass('js-cmp-slider') ){
                var this_params = this_slider.data('params');
                this_params = this_params.replace(/\'/g , "\"");
                this_params = jQuery.parseJSON(this_params);
                console.log('Is slider ',this_params);
                setValue(this_slider,this_params.value);
                setMáx(this_slider,this_params.max);
                setMin(this_slider,this_params.min);
                setMid(this_slider,this_params.mid);
                setStep(this_slider,this_params.step);
             };
        });
        
    };
    var setValue = function(obj,val){
        console.log('COMMENT: ', obj,val);
        obj.attr('value',val);
    };
    var setMáx = function(obj,val){
        obj.attr('max',val);    
    };
    var setMin = function(obj,val){
        obj.attr('min',val);
    };
    var setMid = function(obj,val){
        obj.attr('mid',val);
    };
    var setStep = function(obj,val){
        obj.attr('step',val);
    };
    return {
        Render : Render
    }
}());

var mycart = (function(){
    var Render = function(){
        setHtml();
    };
    var setHtml = function(){
        $('mycart').html(`  <section>
                                <h1>HOOOla</h1>
                            </section>
        `);
    };
    return {
        Render : Render
    }
})();

$(function() {
    const t = document.querySelector('#x-foo-from-template');
    const instance = t.content.cloneNode(true);
    document.body.appendChild(instance);
    customElements.define('x-foo-from-template', class extends HTMLElement {
        constructor() {
          super(); // always call super() first in the ctor.
          let shadowRoot = this.attachShadow({mode: 'open'});
          const t = document.querySelector('#x-foo-from-template');
          const instance = t.content.cloneNode(true);
          shadowRoot.appendChild(instance);
            
        }
      });

      

 // Buscamos los elementos a renderizar
renderizator.Render();
mycart.Render();
});
