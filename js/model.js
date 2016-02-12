
var Model = (function () {
    function Model() {
        this.people = [
             {
                name: 'Name',
                age: 'Age',
                grade:'Grade',
                completed: true
            },
            {
                name: 'Ted',
                age: 18,
                grade:4,
                completed: true
            },
            {
                name: 'Tom',
                age: 17,
                grade: 5,
                completed: true
            },
            {
                name: 'Met',
                age: 19,
                grade:3,
                completed: true
            },
               {
                name: 'Pol',
                age: 18,
                grade:5,
                completed: false
            }
        ];
    };
    Model.prototype.getItems = function(){
        return this.people;
    }


    return Model;
})();