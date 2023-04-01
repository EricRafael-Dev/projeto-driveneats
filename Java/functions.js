function select(type_of_food, food_selected){


    const remove_other_options = document.querySelector(type_of_food + " .selected");
    console.log(remove_other_options);

    if (remove_other_options !== null){
        
        remove_other_options.classList.remove("selected");
    };


    const verify_selection_check = document.querySelector(type_of_food + " " + ".price-verify .selection-check");
    console.log(verify_selection_check);

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
        const text_button = document.querySelector(".text_button")

        button.classList.add("confirm");
        text_button.innerHTML = "Fechar pedido";
        const enable_button = document.querySelector(".confirm").disabled
        document.querySelector(".confirm").disabled = false
    }

}



