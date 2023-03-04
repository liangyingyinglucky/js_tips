//初始化
function lyy_confirm(params) {
    var model = $("#common_confirm_model");
    model.find(".title").html(params.title)
    model.find(".message").html(params.message)
    //每次都将监听先关闭，防止多次监听发生，确保只有一次监听
    model.find(".cancel").off("click");
    model.find(".ok").off("click");
    model.find(".ok").on("click", function () {
        params.operate(true)
    });
    model.find(".cancel").on("click", function () {
        params.operate(false)
    });
}

//自定义提示信息框
function Next(id) {
    if ($('.vague_status:checked').length >= 1 || $(".recommend:checked").length >= 1 || $('input[name="other_recommc"]').val() != '') {
        $('#common_confirm_btn').click();//这句是重点
        lyy_confirm({//这里是进行自定义设置
            title: "提示",
            message: "当前阅片未完成，是否确定进入下一位？",
            operate: function (res) {
                if (res) {
                    location.href = "/apply/show/" + id;
                }
            }
        });
    }else{
        location.href = "/apply/show/" + id;
    }
}

//传值
$('#applyCheck').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget);
    var apply = button.data('apply');
    var type = button.data('type');
    var modal = $(this);
    modal.find('.hidden_apply_id').val(apply);
    modal.find('.hidden_type').val(type);
});