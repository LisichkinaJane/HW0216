/**
 * Created by IlyaLitvinov on 14.01.16.
 */
var Controller = (function () {
    function Controller(model, view) {
        console.log('init Controller');
        var self = this;
        this.view = view;
        this.model = model;
        this.show();
    }

    Controller.prototype.show = function () {
        this.view.render(this.model.getItems());
    };

    return Controller;
})();