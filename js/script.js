$("#ButtonAdd").on("click", (e) => {
   e.preventDefault();
   var todo = $("#inputText").val();
   $("#list").append(`<div class= "listElements"> 
   <h3 id="Title"> ${todo} </h3 
   <br>
   <button type="submit" id="ButtonCheck">
      Check
   </button>
   <button type="submit" id="ButtonDelete">
      Delete
   </button>
   </div>`);
   $("#inputText").val('');
});

$("#list").on("click", "#ButtonDelete", function (){
   $(this).parent().remove();
});

$("#list").on("click", "#ButtonCheck", function (){
   $(this).siblings("#Title").toggleClass("check");

});