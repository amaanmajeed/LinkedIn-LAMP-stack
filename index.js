let postbutton = document.getElementById('postbutton');
let res = document.getElementById('postbox')
  res.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      add_container();
    }
  });

  function add_container(){
    var value = document.getElementById("postbox").value;
    var text1 = document.createTextNode(value);

    var name = document.getElementById("name").innerText;

    document.getElementById("postbox").value = '';

    var postdiv = document.createElement("div");
    postdiv.classList.add("post");
    
    var divpostheader = document.createElement("div");
    divpostheader.classList.add("post-header");

    var itag = document.createElement("i");
    itag.classList.add("material-icons");
    itag.classList.add("sidebar-top-avatar");

    var itagtext = document.createTextNode("account_circle");
    itag.appendChild(itagtext);
    divpostheader.appendChild(itag);

    var divpostinfo = document.createElement("div");
    divpostinfo.classList.add("post-info");

    var h2tag = document.createElement("h2");
    var h2text = document.createTextNode(name);
    var ptag = document.createElement("p");
    var ptext = document.createTextNode("Php Developer");

    h2tag.appendChild(h2text);
    ptag.appendChild(ptext);

    divpostinfo.appendChild(h2tag);
    divpostinfo.appendChild(ptag);

    divpostheader.appendChild(divpostinfo);

    postdiv.appendChild(divpostheader);


    var divpostbody = document.createElement("div");
    divpostbody.classList.add("post-body");


    var p2 = document.createElement("p");
    p2.appendChild(text1);
    divpostbody.appendChild(p2);

    postdiv.appendChild(divpostbody);


    // Like
    var divfeedinput = document.createElement("div");
    divfeedinput.classList.add("feed-inputOptions");

    var divinputoptions1 = document.createElement("div");
    divinputoptions1.classList.add("inputOptions");

    var itag2 = document.createElement("i");
    itag2.classList.add("material-icons");
    itag2.classList.add("greyc");

    var textfill = document.createTextNode("thumb_up");
    itag2.appendChild(textfill);

    var h4like = document.createElement("h4");
    var liketext = document.createTextNode("Like");
    h4like.appendChild(liketext);

    divinputoptions1.appendChild(itag2);
    divinputoptions1.appendChild(h4like);

    divfeedinput.appendChild(divinputoptions1); 
    postdiv.appendChild(divfeedinput);


    // Comment
    var divinputoptions2 = document.createElement("div");
    divinputoptions2.classList.add("inputOptions");

    var itag3 = document.createElement("i");
    itag3.classList.add("material-icons");
    itag3.classList.add("greyc");

    var textfill1 = document.createTextNode("comment");
    itag3.appendChild(textfill1);

    var h4comment = document.createElement("h4");
    var commenttext = document.createTextNode("Comment");
    h4comment.appendChild(commenttext);

    divinputoptions2.appendChild(itag3);
    divinputoptions2.appendChild(h4comment);

    divfeedinput.appendChild(divinputoptions2);


    // Share
    var divinputoptions3 = document.createElement("div");
    divinputoptions3.classList.add("inputOptions");

    var itag4 = document.createElement("i");
    itag4.classList.add("material-icons");
    itag4.classList.add("greyc");

    var textfill2 = document.createTextNode("share");
    itag4.appendChild(textfill2);

    var h4share = document.createElement("h4");
    var sharetext = document.createTextNode("Share");
    h4share.appendChild(sharetext);

    divinputoptions3.appendChild(itag4);
    divinputoptions3.appendChild(h4share);

    divfeedinput.appendChild(divinputoptions3);


    // Send
    var divinputoptions4 = document.createElement("div");
    divinputoptions4.classList.add("inputOptions");

    var itag5 = document.createElement("i");
    itag5.classList.add("material-icons");
    itag5.classList.add("greyc");

    var textfill3 = document.createTextNode("send");
    itag5.appendChild(textfill3);

    var h4send = document.createElement("h4");
    var sendtext = document.createTextNode("Send");
    h4send.appendChild(sendtext);

    divinputoptions4.appendChild(itag5);
    divinputoptions4.appendChild(h4send);

    divfeedinput.appendChild(divinputoptions4);

    // document.getElementById('allposts').appendChild(postdiv);
    // insert at end

    var list = document.getElementById('allposts');
    list.insertBefore(postdiv, list.childNodes[0]);
    //insert at front    
  }
