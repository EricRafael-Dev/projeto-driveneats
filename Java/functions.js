function select(type_of_food, food_selected){


    const remove_other_options = document.querySelector(type_of_food + " .selected");

    if (remove_other_options !== null){
        
        remove_other_options.classList.remove("selected");
    };


    const verify_selection_check = document.querySelector(type_of_food + " " + ".price-verify .selection-check");

    if (verify_selection_check !== null){

        verify_selection_check.classList.remove("selection-check");

    };


    const selection_check = document.querySelector(type_of_food + " " + food_selected + " .check");
    const selection = document.querySelector(food_selected);
    
    selection.classList.add("selected");
    selection_check.classList.add("selection-check");
    

    const food_on = document.querySelector(".foods .selected");
    const drink_on = document.querySelector(".drinks .selected");
    const dessert_on = document.querySelector(".desserts .selected");
    
    if (food_on !== null && drink_on!== null && dessert_on !== null){
        const button = document.querySelector(".button");
        const text_button = document.querySelector(".text_button");

        button.classList.add("confirm");
        text_button.innerHTML = "Fechar pedido";
        const enable_button = document.querySelector(".confirm").disabled;
        document.querySelector(".confirm").disabled = false;
    }



}
function click_button (){
    
    const cancel = document.querySelector(".appear");
    const finish_order = document.querySelector(".finish-order");
    

    if (cancel !== null){
        cancel.classList.remove("appear");
        
    }

    else{
            
        client = prompt("Inserir seu nome:");
        adress = prompt('Insira seu endereço:');
        finish_order.classList.add("appear");
    }


    //name of foods
    const food_on_name = document.querySelector(".foods .selected h2");
    const drink_on_name = document.querySelector(".drinks .selected h2");
    const dessert_on_name = document.querySelector(".desserts .selected h2");

    var name_food = food_on_name.textContent
    var name_drink = drink_on_name.textContent
    var name_dessert = dessert_on_name.textContent

    //add the names in "confirm-order" window
    const window_confirm_order_food_name = document.querySelector(".content-food .item-food-name");
    const window_confirm_order_drink_name = document.querySelector(".content-drink .item-drink-name");
    const window_confirm_order_dessert_name = document.querySelector(".content-dessert .item-dessert-name");

    window_confirm_order_food_name.textContent = name_food;
    window_confirm_order_drink_name.textContent = name_drink;
    window_confirm_order_dessert_name.textContent = name_dessert;


    //price of foods
    const food_on_price = document.querySelector(".foods .selected .price .main");
    const drink_on_price = document.querySelector(".drinks .selected .price .main");
    const dessert_on_price = document.querySelector(".desserts .selected .price .main");

    const price_food = food_on_price.textContent
    const price_drink = drink_on_price.textContent
    const price_dessert = dessert_on_price.textContent

    //add the values in "confirm-order" window
    const window_confirm_order_food_price = document.querySelector(".content-food .item-food-price");
    const window_confirm_order_drink_price = document.querySelector(".content-drink .item-drink-price");
    const window_confirm_order_dessert_price = document.querySelector(".content-dessert .item-dessert-price");

    window_confirm_order_food_price.textContent = price_food;
    window_confirm_order_drink_price.textContent = price_drink;
    window_confirm_order_dessert_price.textContent = price_dessert;

    const value_food_string = price_food.toString().replace(",", ".")
    const value_drink_string = price_drink.toString().replace(",", ".")
    const value_dessert_string = price_dessert.toString().replace(",", ".")

    const value_food = parseFloat(value_food_string)
    const value_drink = parseFloat(value_drink_string)
    const value_dessert = parseFloat(value_dessert_string)


    const totality = value_food + value_drink + value_dessert;
    var total_value = parseFloat(totality).toFixed(2)
    var total = total_value.toString().replace(".", ",")

    
    const value_total = document.querySelector(".total-div .total-price")
    value_total.textContent = "R$ " + total;

    return {name_food, name_drink, name_dessert, total, client, adress};
}

function set_values(){

    const {name_food, name_drink, name_dessert, total, client, adress} = click_button();

    send_message(name_food, name_drink, name_dessert, total, client, adress);

};

function send_message(name_food, name_drink, name_dessert, total, client, adress){

    const mesage = `Olá, gostaria de fazer o pedido:\n- Prato: ${name_food}\n- Bebida: ${name_drink}\n- Sobremesa: ${name_dessert}\nTotal: R$ ${total}\n\n\nNome: ${client}\nEndereço: ${adress}`;

    const encoded_mesage = encodeURIComponent(mesage);

    window.open(`https://wa.me/+5521969480322?text=${encoded_mesage}`)
}


