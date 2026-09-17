function orderNow(item){
  let phone = "917799246590"; 
  let message = "Hi bro! Naku " + item + " kavali. Order cheyava? 🔥";
  let whatsappLink = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  
  window.open(whatsappLink, "_blank");
}

