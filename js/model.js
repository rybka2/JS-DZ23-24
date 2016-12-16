define(
    'model', ['jQuery'],
    function($) {
        function Model(data) {
            var self = this;

            self.data = data;

            self.addItem = function(item) {
                if (item.length === 0) {
                    return;
                }

                self.data.unshift(item);

                return self.data;
            };

            self.removeItem = function(item) {
                var index = self.data.indexOf(item);

                if (index === -1) {
                    return;
                }
                self.data.splice(index, 1);

                return self.data;
            };

            self.rewriteItem = function(index, item) {
                if (item.length === 0) {
                    return;
                }
                self.data[index] = item;
                return self.data;
            };
        }
        return Model;
    });