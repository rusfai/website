window.onload = () =>{


    const text = document.getElementById("buttonCountNumber"); //предыдущее число
    document.getElementById("heart").addEventListener("pointerdown", (event) => { //обработка нажатия
        
        let numb = Number(text.textContent.replace(/\s+/g, '')) + 1 //Удаление пробела (если есть) и увеличение на 1
        let numbFmt = new Intl.NumberFormat('ru-RU').format(numb); //добавление пробела 
        text.textContent = numbFmt; //Изменение числа на экране

        if (numb == 21) {
            document.querySelector("#top_love_1").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_2").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_3").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_4").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_5").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_6").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_7").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_8").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_9").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
            document.querySelector("#top_love_10").src = "https://www.pngall.com/wp-content/uploads/2016/03/Heart-PNG-HD.png"; 
        } else if (numb == 1) {
            document.querySelector("#top_love_1").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 2) { 
            document.querySelector("#top_love_1").src = "/static/all_heart.png";
        } else if (numb == 3) {
            document.querySelector("#top_love_2").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 4) { 
            document.querySelector("#top_love_2").src = "/static/all_heart.png";
        }else if (numb == 5) {
            document.querySelector("#top_love_3").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 6) { 
            document.querySelector("#top_love_3").src = "/static/all_heart.png";
        }else if (numb == 7) {
            document.querySelector("#top_love_4").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 8) { 
            document.querySelector("#top_love_4").src = "/static/all_heart.png";
        }else if (numb == 9) {
            document.querySelector("#top_love_5").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 10) { 
            document.querySelector("#top_love_5").src = "/static/all_heart.png";
        }else if (numb == 11) {
            document.querySelector("#top_love_6").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 12) { 
            document.querySelector("#top_love_6").src = "/static/all_heart.png";
        }else if (numb == 13) {
            document.querySelector("#top_love_7").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 14) { 
            document.querySelector("#top_love_7").src = "/static/all_heart.png";
        }else if (numb == 15) {
            document.querySelector("#top_love_8").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 16) { 
            document.querySelector("#top_love_8").src = "/static/all_heart.png";
        }else if (numb == 17) {
            document.querySelector("#top_love_9").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 18) { 
            document.querySelector("#top_love_9").src = "/static/all_heart.png";
        }else if (numb == 19) {
            document.querySelector("#top_love_10").src = "/static/past_heart.png"; // изменить изображение
        } else if (numb == 20) { 
            document.querySelector("#top_love_10").src = "/static/all_heart.png";
        }
   
        
        
    });

    }




    