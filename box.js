//布局：
/*<fieldset>
    <label for="radio-57">是</label>
    <input type="radio" id="radio-57"
           name="suspected_cataract" value='1'>
        <label for="radio-58">否</label>
        <input type="radio" id="radio-58"
               name="suspected_cataract" value='0'>
</fieldset>*/

//初始化：
$("input[type='checkbox'],input[type='radio']").checkboxradio();

//选中：
$("#left .is_has_diabetic input:radio[name='has_diabetic_retinopathy']").eq(1).prop("checked",true).checkboxradio("refresh");

//不选中：
$("#radio-3,#radio-4").prop("checked",false).checkboxradio("refresh");





