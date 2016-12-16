define(
    'controller', ['jQuery'],
    function($) {
        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
			$(document).keypress(function(e) {
				if(e.which == 13) {
					addItem();
				}
			});
            view.elements.listContainer.on('click', '.delete', removeItem);
            view.elements.listContainer.on('dblclick', '.rewrite', editItem);
            view.elements.listContainer.on('click', '.ok', editDoneItem);

            function addItem() {
                var newItem = view.elements.input.val();

                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var indexItem = $(this).attr('data-index'),
                    txt = $(this).attr('data-value');

                view.renderEdit(indexItem, txt);
            }

            function editDoneItem() {
                var indexEditItem = $(this).attr('data-index'),
                    editTxt = $('.edit').val();
                model.rewriteItem(indexEditItem, editTxt);
                view.renderList(model.data);
            };
        }
        return Controller;
    });