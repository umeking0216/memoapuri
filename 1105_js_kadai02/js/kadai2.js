const key= document.getElementById('key'); 
const memo= document.getElementById('memo'); 

$("#save").on('click',function(){
  const key2= document.getElementById('key'); 
  const memo2= document.getElementById('memo'); 
    let key = $("#key").val();
    let memo = $("#memo").val();
    console.log(key)
    console.log(memo)
    localStorage.setItem(key,memo)
    memo2.value = '';
    key2.value= '' ;

});



    
    const html = `
        <tr>
            <th>${key}</th>
            <td>${memo}</td>
        </tr>
    `
    // $("#list").append(html)
    // })
    

    $("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
    });
    


const btn3 = document.getElementById('btn3');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');



$("#day1").on('click', function() {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
  const value = localStorage.getItem('2022-11-01');
  const diaryItem  = `<P>${value}</P>`
  $("#diary").html(diaryItem);
});

$("#day2").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem('2022-11-02');
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day3").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-03");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day4").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-04");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day5").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-05");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day6").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-06");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day7").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-07");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day8").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-08");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day9").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-09");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day10").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-10");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });


  $("#day11").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-11");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day12").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-12");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day13").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-13");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day14").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-14");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day15").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-15");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day16").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-16");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day17").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-17");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day18").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-18");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day19").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-19");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day20").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-20");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day21").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-21");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day22").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-22");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day23").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-23");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day24").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-24");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day25").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-25");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day26").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-26");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day27").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-27");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day28").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-28");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day29").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-29");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });

  $("#day30").on('click', function() {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
    const value = localStorage.getItem("2022-11-30");
    const diaryItem  = `<P>${value}</P>`
    $("#diary").html(diaryItem);
  });






$("#mask").on('click', function() {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});

    for (let i = 0; i < localStorage.length; i++) {
        const key2 = localStorage.key(i);
        const value2 = localStorage.getItem(key2);
        const html = `
    <tr>
        <th>${key2}</th>
        <td>${value2}</td>
    </tr>
`
    
        $("#list").append(html)
}



$(document).ready(function(){
$(day1).css("under_line")

});

