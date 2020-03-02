

$( "#jenisrumah" ).change(function() {
  if(this.value=="non"){
    $("#c1").show();
  }
  else{
    $("#c1").hide();
  }
});

$( ".form-check-input,c1-b-2" ).click(function() {
  if(this.value=="non"){
    $("#c1-b-2q").show();
  }
  else{
    $("#c1-b-2q").hide();
  }
});

$( ".c2-q" ).click(function() {
  if(this.value=="non"){
    $("#c2-lain").show();
  }
  else{
    $("#c2-lain").hide();
  }
});

$( ".c8-q" ).click(function() {
  if(this.value=="non"){
    $("#c8-lain").show();
  }
  else{
    $("#c8-lain").hide();
  }
});

////-------hide show checkbox----////

$( ".c8-b" ).click(function() {
  if($( "#c8bcbox" ).prop( "checked" )){
    $("#c8b-lain").show();
  }
  else{
    $("#c8b-lain").hide();
  }
});

////----------------c8c-----------////

$( ".c8cRadios" ).click(function() {
  if(this.value=="ada"){
    $("#c8-bekal").show();
    $("#c8-xbekal").hide();
  }
  else if(this.value=="tiada"){
    $("#c8-bekal").hide();
    $("#c8-xbekal").show();
  }
});

////----------------c8c-----------////



////----------------table radiobox-----------////

$( ".lain-c5f" ).click(function() {
  if(this.value=="1"){
    $("#c5f-lain").show();
  }
  else{
    $("#c5f-lain").hide();
  }
});

$( ".lain-c7f" ).click(function() {
  if(this.value=="1"){
    $("#c7f-lain").show();
  }
  else{
    $("#c7f-lain").hide();
  }
});
