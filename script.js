window.addEventListener('load', function () {
    let card_number_input = document.getElementById('card_number');
    let card_number_show = document.getElementById('front_card_NU');

    let card_name_input = document.getElementById('info_Input_NM');
    let card_name_show = document.getElementById('front_card_NM');

    let cvc_input = document.getElementById('CVC_input');
    let cvc_show = document.getElementById('CVC_show');

    let EXP_month_input = document.getElementById('month');
    let EXP_month_show = document.getElementById('EXP_month');

    let EXP_year_input = document.getElementById('year');
    let EXP_year_show = document.getElementById('EXP_year');

    let submit = document.getElementById('myform');
    let continue_ = document.getElementById('complete_form');

    let error_1 = document.getElementById('error_1');
    let error_2 = document.getElementById('error_2');
    let error_3 = document.getElementById('error_3');
    let error_4 = document.getElementById('error_4');
    // ------------------------------------------------Card Number Function----------------------------------------

    card_number_input.addEventListener('input', function () {
        let card_number = card_number_input.value;
        let numeric_value = card_number.replace(/\D/g, "");
        let formatted_value = numeric_value.replace(/(\d{4})/g, '$1 ');
        card_number_input.value = formatted_value.trim();
        card_number_show.value = card_number_input.value;
    })
    // -------------------------------------------------Card Name Function--------------------------------------------
    card_name_input.addEventListener('input', function () {
        let card_name = card_name_input.value;
        let ch_value = card_name.replace(/[^a-zA-Z\s]+/g, "");
        card_name_input.value = ch_value;
        card_name_show.value = card_name_input.value;
    })

    // ----------------------------------------------------CVC function------------------------------------------
    cvc_input.addEventListener('input', function () {
        let cvc = cvc_input.value;
        let cvc_value = cvc.replace(/\D/g, "");
        cvc_input.value = cvc_value;
        cvc_show.value = cvc_input.value;
    })

    // -----------------------------------------------------EXP date---------------------------------------------
    EXP_month_input.addEventListener('input', function () {
        let mm = EXP_month_input.value.replace(/\D/g, '').trim()
        EXP_month_input.value = mm;
        EXP_month_show.value = mm;
    })
    EXP_year_input.addEventListener('input', function () {
        let yy = EXP_year_input.value.replace(/\D/g, '').trim()
        EXP_year_input.value = yy;
        EXP_year_show.value = yy;
    })

    // --------------------------------------------------------Submit-----------------------------------------------------
    submit.addEventListener('submit', function (event) {
        let check = false;
        event.preventDefault();
        if (card_name_input.value.trim() === "") {
            error_1.classList.add('display');
            card_name_input.classList.add('border_color');
            check = false;
        }
        else {
            error_1.classList.remove('display');
            card_name_input.classList.remove('border_color');
            check = true;
        }

        if (card_number_input.value.trim() === "") {
            error_2.classList.add('display');
            card_number_input.classList.add('border_color')
            check = false;
        }
        else {
            error_2.classList.remove('display');
            card_number_input.classList.remove('border_color');
            check = true;
        }

        if (EXP_month_input.value === '' || EXP_year_input.value === '') {
            error_3.classList.add('display');
            EXP_month_input.classList.add('border_color');
            EXP_year_input.classList.add('border_color');
            check = false;
        }
        else {
            error_3.classList.remove('display');
            EXP_month_input.classList.remove('border_color');
            EXP_year_input.classList.remove('border_color');
            check = true;
        }

        if (cvc_input.value === '') {
            error_4.classList.add('display');
            cvc_input.classList.add('border_color')
            check = false;
        }
        else {
            error_4.classList.remove('display');
            cvc_input.classList.remove('border_color')
            check = true;
        }

        if (check == true) {
            continue_.classList.remove('hidden');
            submit.classList.add('hidden');
        }
    })  

    continue_.addEventListener('submit', function (event) {
        event.preventDefault();
        card_name_show.value = "";
        card_number_show.value = "";
        EXP_month_show.value = "";
        EXP_year_show.value = "";
        cvc_show.value = "";
        card_name_input.value = "";
        card_number_input.value = "";
        EXP_month_input.value = "";
        EXP_year_input.value = "";
        cvc_input.value = "";
        continue_.classList.add('hidden');
        submit.classList.remove('hidden')
    })
});
