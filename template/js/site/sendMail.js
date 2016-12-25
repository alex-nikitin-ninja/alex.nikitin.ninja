$(document).ready(function () {
    sendMail = {
        thisForm: false,
        init: function (confObj) {
            var that = this;
            that.errorBox = $(confObj.errorBox);
            that.successBox = $(confObj.successBox);
            that.inProgressBox = $(confObj.inProgressBox);
            that.formBox = $(confObj.formBox);
            that.tryAgain = $(confObj.tryAgain);
            that.submitButton = $(confObj.submitButton);
            that.action = confObj.action;

            $(that.formBox).find(that.submitButton).click(function (event) {
                that.send();
                event.preventDefault();
            });

            $(that.tryAgain).click(function (event) {
                that.hideAll();
                that.showItem(that.formBox);
            });

        },
        hideAll: function () {
            var that = this;
            $(that.errorBox).removeClass('visible');
            $(that.successBox).removeClass('visible');
            $(that.inProgressBox).removeClass('visible');
            $(that.formBox).removeClass('visible');
        },
        hideItem: function (item) {
            $(item).removeClass('visible');
        },
        showItem: function (item) {
            $(item).addClass('visible');
        },
        getFormData: function () {
            var formBox = this.formBox;
            var r = {};
            $(formBox).find('[name]').each(function (index, el) {
                if ($(this).attr('name').length > 0) {
                    r[$(this).attr('name')] = $(this).val();
                }
            });
            return r;
        },
        send: function () {
            var that = this;
            that.hideAll();
            that.showItem(that.inProgressBox);

            $.ajax({
                    url: that.action,
                    type: 'POST',
                    dataType: 'json',
                    data: that.getFormData(),
                })
                .done(function (response) {
                    that.hideAll();
                    if (void 0 === response.result || response.result !== true) {
                        that.showItem(that.errorBox);
                    }else{
                        that.showItem(that.successBox);
                    }
                })
                .fail(function (response) {
                    that.hideAll();
                    that.showItem(that.errorBox);
                });


        }
    };
});