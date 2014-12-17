$(document).ready(function() {

  $('#hotelapp').fullpage({
    menu: '#menu',
    anchors:['welcome', 'appart', 'single', 'double', 'double-premium', 'for-disabled-people', 'restaurant', 'meetings', 'map'],
    slidesNavigation: true,
    css3: true,
    fixedElements: '.header',
    scrollOverflow: true,
    resize: false,
    touchSensitivity: 35,
    slideSelector: '.slide',
    // slidesNavigation: true,

    afterLoad: function(anchorLink, index){
      if($('.section.active').hasClass('appart')) {
        $('.appart-menu').fadeIn();
      }
    },


    onLeave: function(index, nextIndex, direction){
      if(!$('.section.active').hasClass('appart')) {
        $('.appart-menu').fadeOut();
      }

      if (nextIndex == 1) {
        $('#booking').removeClass('active');
      } else {
        $('#booking').addClass('active');
      }

    },

    // afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){


    // },

    afterRender: function(anchorLink, index){

    }

  });

  var ddBasic = [
      { text: "Одиночный", value: 1, },
      { text: "Двойной", value: 2, },
      { text: "Двойной премиум", value: 3, },
      { text: "Для людей с ограниченными возможностями", value: 4, }
  ];

  $('#appType').ddslick({
      data: ddBasic,
      width: '100%',
      background: '#fff',
      selectText: "Номер"
  });


});
