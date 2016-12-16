define(
    'view', ['jQuery', 'tmpl'],

    function($, tmpl) {
        function View(model) {
            var self = this;

            function init() {
                var wrapper = tmpl($('#main-wrapper').html());
                $('body').append(wrapper);
                self.elements = {
                    input: $('.input'),
                    addBtn: $('.add'),
                    listContainer: $('.list')
                };
                self.renderList(model.data);
            };

            self.renderList = function(data) {
                var list = tmpl($('#item-list').html(), {
                    data: data
                });
                self.elements.listContainer.html(list);
            };

            self.renderEdit = function(index, text) {

                var editInput = tmpl($('#edit-item').html(), {
                        data: index
                    }),
                    str = '.list li:nth-child(' + (+index + 1) + ')';
                self.renderList(model.data);
                $(str).append(editInput);
                $('.edit').val(text).select();
            }

            init();
        }
        return View;
    });