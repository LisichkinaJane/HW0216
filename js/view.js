var View = (function () {
    function View() { 
        this.wrapper = $('.main');
        this.tableWrap;
    }
    
View.prototype.render = function(items){
    var self=this;
    $(this.wrapper).html('');
    this.tableWrap = "<table class='table'>";
   
    $.each(items, function(index,item){
       self.tableWrap += ("<tr class='table-row'><td class='table-col'>" + item.name +"</td><td class='table-col'>" + item.age +"</td><td class='table-col'>"+item.grade+"</td></tr>"); 
    });
    this.tableWrap+='</table>';
    $(this.wrapper).append($(this.tableWrap));
}

    return View;
})();