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
    var h2text = document.createTextNode("Saria Mubeen");
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
    var div2 = document.createElement("div");
    div2.classList.add("feed-inputOptions");

    var div3 = document.createElement("div");
    div3.classList.add("inputOptions");

    var itag2 = document.createElement("i");
    itag2.classList.add("material-icons");
    itag2.classList.add("greyc");

    var textfill = document.createTextNode("thumb_up");
    itag2.appendChild(textfill);

    var h4like = document.createElement("h4");
    var liketext = document.createTextNode("Like");
    h4like.appendChild(liketext);

    div3.appendChild(itag2);
    div3.appendChild(h4like);

    div2.appendChild(div3); 
    postdiv.appendChild(div2);


    // Comment
    var div5 = document.createElement("div");
    div5.classList.add("inputOptions");

    var itag3 = document.createElement("i");
    itag3.classList.add("material-icons");
    itag3.classList.add("greyc");

    var textfill1 = document.createTextNode("comment");
    itag3.appendChild(textfill1);

    var h4comment = document.createElement("h4");
    var commenttext = document.createTextNode("Comment");
    h4comment.appendChild(commenttext);

    div5.appendChild(itag3);
    div5.appendChild(h4comment);

    div2.appendChild(div5);


    // Share
    var div6 = document.createElement("div");
    div6.classList.add("inputOptions");

    var itag4 = document.createElement("i");
    itag4.classList.add("material-icons");
    itag4.classList.add("greyc");

    var textfill2 = document.createTextNode("share");
    itag4.appendChild(textfill2);

    var h4share = document.createElement("h4");
    var sharetext = document.createTextNode("Share");
    h4share.appendChild(sharetext);

    div6.appendChild(itag4);
    div6.appendChild(h4share);

    div2.appendChild(div6);


    // Send
    var div7 = document.createElement("div");
    div7.classList.add("inputOptions");

    var itag5 = document.createElement("i");
    itag5.classList.add("material-icons");
    itag5.classList.add("greyc");

    var textfill3 = document.createTextNode("send");
    itag5.appendChild(textfill3);

    var h4send = document.createElement("h4");
    var sendtext = document.createTextNode("Send");
    h4send.appendChild(sendtext);

    div7.appendChild(itag5);
    div7.appendChild(h4send);

    div2.appendChild(div7);

    // document.getElementById('allposts').appendChild(postdiv);
    // insert at end

    var list = document.getElementById('allposts');
    list.insertBefore(postdiv, list.childNodes[0]);
    //insert at front    
  }
