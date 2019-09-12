/*! event-organiser 3.1.7-0-ge9fdb6b 2016-12-23 15:51 */
function eveorg_getParameterByName(a,b){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c="[\\?&]"+a+"=([^&#]*)",d=new RegExp(c),e=d.exec(b);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}var eventorganiser=eventorganiser||{};!function(a){jQuery(document).ready(function(){function b(a,b,c){var d;for(d in a)if(a[b]==c)return d;return!1}function c(c){var d="undefined"!=typeof c.whitelist&&c.whitelist?c.whitelist.split(","):!1,e="<select class='eo-fc-filter eo-fc-filter-"+c.type+"' data-filter-type='"+c.type+"'>";e+="<option value=''>"+c.select_none+"</option>";var f;for(var g in c.terms){if(f=c.terms[g],d){var h=!1;-1!==a.inArray(f.slug,d)&&(h=!0);for(var i=f;!h&&i.parent>0;)i=b(c.terms,"term_id",i.parent),-1!==a.inArray(i.slug,d)&&(h=!0);if(!h)continue}e+="<option value='"+f.slug+"'>"+f.name+"</option>"}e+="</select>";var j=a("<span class='fc-header-dropdown filter-'"+c.type+"></span>");return j.append(e),j}function d(){return a("<span class='fc-header-goto'><input type='hidden' class='eo-mini-calendar'/></span>")}if(a(".eo-fullcalendar").on("change",".eo-fc-filter",function(){a(".eo-fullcalendar").fullCalendar("rerenderEvents")}),a(".eo-fullcalendar").length>0){var e,f,g=eventorganiser.calendars;f={agendaDay:"listDay",basicDay:"listDay",listDay:"listDay",agendaWeek:"listWeek",basicWeek:"listWeek",listWeek:"listWeek",month:"listMonth",listMonth:"listMonth"};for(var h=0;h<g.length;h++){var i="#eo_fullcalendar_"+(h+1);"undefined"==typeof g[h].category&&(g[h].category=""),"undefined"==typeof g[h].venue&&(g[h].venue="");var j={id:i,defaultDate:g[h].defaultdate?g[h].defaultdate:void 0,category:g[h].event_category,venue:g[h].event_venue,tag:g[h].event_tag,organiser:g[h].event_organiser,event_series:g[h].event_series,customButtons:{category:function(){return c({terms:eventorganiser.fullcal.categories,select_none:EOAjaxFront.locale.cat,whitelist:g[h].event_category,type:"category"})},venue:function(){return c({terms:eventorganiser.fullcal.venues,select_none:EOAjaxFront.locale.venue,whitelist:g[h].event_venue,type:"venue"})},tag:function(){return c({terms:eventorganiser.fullcal.tags,select_none:EOAjaxFront.locale.tag,whitelist:"",type:"tag"})},"goto":d},theme:g[h].theme,isRTL:g[h].isrtl,editable:!1,selectable:!1,weekMode:"variable",tooltip:g[h].tooltip,firstDay:parseInt(eventorganiser.fullcal.firstDay,10),weekends:g[h].weekends,hiddenDays:g[h].hiddendays,slotDuration:g[h].slotduration,allDaySlot:g[h].alldayslot,allDayText:g[h].alldaytext,axisFormat:g[h].axisformat,minTime:g[h].mintime,maxTime:g[h].maxtime,eventColor:"#1e8cbe",timeFormatphp:g[h].timeformatphp,timeFormat:g[h].timeformat,columnFormat:{month:g[h].columnformatmonth,week:g[h].columnformatweek,day:g[h].columnformatday},titleFormat:{month:g[h].titleformatmonth,week:g[h].titleformatweek,day:g[h].titleformatday},header:{left:g[h].headerleft,center:g[h].headercenter,right:g[h].headerright},eventRender:function(b,c,d){var e=a(d.calendar.options.id).find(".eo-fc-filter-category").val(),f=a(d.calendar.options.id).find(".eo-fc-filter-venue").val(),g=a(d.calendar.options.id).find(".eo-fc-filter-tag").val(),h=!0;return"undefined"!=typeof e&&""!==e&&a.inArray(e,b.category)<0&&(h=!1),"undefined"!=typeof f&&""!==f&&f!==b.venue_slug&&(h=!1),"undefined"!=typeof g&&""!==g&&a.inArray(g,b.tags)<0&&(h=!1),(h=wp.hooks.applyFilters("eventorganiser.fullcalendar_render_event",h,b,c,d))?void(d.calendar.options.tooltip&&a(c).qtip({content:{text:b.description,button:!1,title:b.title},position:{my:"top center",at:"bottom center",viewport:a(window),adjust:{method:"shift none"}},hide:{fixed:!0,delay:500,effect:function(b){a(this).fadeOut("50")}},border:{radius:4,width:3},style:{classes:"eo-event-toolip qtip-eo",tip:"topMiddle"}})):!1},buttonText:{today:EOAjaxFront.locale.today,month:EOAjaxFront.locale.month,week:EOAjaxFront.locale.week,day:EOAjaxFront.locale.day},monthNames:EOAjaxFront.locale.monthNames,monthNamesShort:EOAjaxFront.locale.monthAbbrev,dayNames:EOAjaxFront.locale.dayNames,dayNamesShort:EOAjaxFront.locale.dayAbbrev,height:g[h].aspectratio?!1:"auto",aspectRatio:g[h].aspectratio?g[h].aspectratio:!1,responsive:g[h].responsive,responsiveBreakpoint:g[h].responsivebreakpoint,defaultView:a(window).width()<514&&g[h].responsive?f[g[h].defaultview]:g[h].defaultview,previousView:g[h].defaultview,nextDayThreshold:g[h].nextdaythreshold,windowResize:function(b){b.calendar.options.responsive&&a(window).width()<b.calendar.options.responsiveBreakpoint?a(this).fullCalendar("changeView",f[b.calendar.options.previousView]):a(this).fullCalendar("changeView",b.calendar.options.previousView)},lazyFetching:"true",events:function(b,c,d,e){var f=this.options,g={start:b.format("YYYY-MM-DD"),end:c.format("YYYY-MM-DD"),timeformat:f.timeFormatphp,users_events:0};"undefined"!=typeof f.category&&""!==f.category&&(g.category=f.category),"undefined"!=typeof f.venue&&""!==f.venue&&(g.venue=f.venue),"undefined"!=typeof f.tag&&""!==f.tag&&(g.tag=f.tag),"undefined"!=typeof f.organiser&&0!==f.organiser&&(g.organiser=f.organiser),f.event_series&&(g.event_series=f.event_series),g=wp.hooks.applyFilters("eventorganiser.fullcalendar_request",g,b,c,d,f),a.ajax({url:eventorganiser.ajaxurl+"?action=eventorganiser-fullcal",dataType:"JSON",data:g,complete:function(a,b){},success:e})},loading:function(b){var c=a("#"+a(this).attr("id")+"_loading");b?(window.clearTimeout(e),e=window.setTimeout(function(){c.show()},1e3)):(window.clearTimeout(e),c.hide())}};j=wp.hooks.applyFilters("eventorganiser.fullcalendar_options",j,g[h]),a(i).fullCalendar(j)}}"undefined"!=typeof eventorganiser.fullcal&&a(".eo-mini-calendar").datepicker({dateFormat:"DD, d MM, yy",changeMonth:!0,changeYear:!0,firstDay:parseInt(eventorganiser.fullcal.firstDay,10),buttonText:EOAjaxFront.locale.gotodate,monthNamesShort:EOAjaxFront.locale.monthAbbrev,dayNamesMin:EOAjaxFront.locale.dayAbbrev,nextText:EOAjaxFront.locale.nextText,prevText:EOAjaxFront.locale.prevText,showOn:"button",beforeShow:function(b,c){c.hasOwnProperty("dpDiv")?c.dpDiv.addClass("eo-datepicker eo-fc-mini-calendar eo-fc-datepicker"):a("#ui-datepicker-div").addClass("eo-datepicker eo-fc-mini-calendar eo-fc-datepicker")},onSelect:function(b,c){var d=a(this).parents("div.eo-fullcalendar").attr("id");a("#"+d).fullCalendar("gotoDate",new Date(Date.parse(b)))}}),a("#eo-upcoming-dates, .eo-upcoming-dates").each(function(b,c){var d={el:a(this)};if(d.el.find("li:gt(4)").length>0){var e=5,f={more:EOAjaxFront.locale.ShowMore,less:EOAjaxFront.locale.ShowLess};d.less=a('<a class="eo-upcoming-dates-show-less" href="#"></a>').text(f.less),d.pipe=a('<span class="eo-upcoming-dates-pipe">|</span>'),d.more=a('<a class="eo-upcoming-dates-show-more" href="#"></a>').text(f.more),d.el.find("li:gt("+(e-1)+")").hide().end().after(d.less,d.pipe,d.more),d.pipe.hide(),d.less.hide().click(function(a){a.preventDefault();var b=Math.floor((d.el.find("li:visible").length-1)/e)*e-1;d.el.find("li:gt("+b+")").hide(),d.more.show(),d.pipe.show(),d.el.find("li:visible").length<=e&&(d.less.hide(),d.pipe.hide())}),d.more.click(function(b){b.preventDefault(),d.less.show(),d.pipe.show(),d.el.find("li:hidden:lt("+e+")").show();var c=d.pipe.offset();a("html, body").animate({scrollTop:Math.max(c.top+40-a(window).height(),a(window).scrollTop())}),0===d.el.find("li:hidden").length&&(d.more.hide(),d.pipe.hide())})}}),a(".eo-widget-cal-wrap").length>0&&a(".eo-widget-cal-wrap").on("click","tfoot a",function(b){if(b.preventDefault(),!a(this).data("eo-widget-cal-disabled")){var c=a(this).closest(".eo-widget-cal-wrap"),d=c.data("eo-widget-cal-id");c.find("tfoot a").data("eo-widget-cal-disabled",1);var e={showpastevents:1,"show-long":0,"link-to-single":0};"undefined"!=typeof eventorganiser.widget_calendars&&"undefined"!=typeof eventorganiser.widget_calendars[d]&&(e=eventorganiser.widget_calendars[d]),"undefined"!=typeof eo_widget_cal&&"undefined"!=typeof eo_widget_cal[d]&&(e=eo_widget_cal[d]),e.eo_month=eveorg_getParameterByName("eo_month",a(this).attr("href")),c.addClass("eo-widget-cal-loading"),a("#"+d+"_overlay").remove(),a("#"+d+"_content").prepend('<div class="eo-widget-cal-overlay" id="'+d+'_overlay"><div class="eo-widget-cal-spinner"/></div>'),a.getJSON(eventorganiser.add_query_arg("action","eo_widget_cal",EOAjaxFront.adminajax),e,function(b){a("#"+d+"_content").html(b),c.removeClass("eo-widget-cal-loading")})}})}),eventorganiser.add_query_arg=function(a,b,c){var d=new RegExp("([?&])"+a+"=.*?(&|$)","i"),e=-1!==c.indexOf("?")?"&":"?";return c.match(d)?c.replace(d,"$1"+a+"="+b+"$2"):c+e+a+"="+b},eventorganiser.template=function(b,c,d){var e=/\\|'|\r|\n|\t|\u2028|\u2029/g;d="undefined"!=typeof d?d:{},d=a.extend(!0,{evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g},d);var f,g={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},h=new RegExp([d.escape.source,d.interpolate.source,d.evaluate.source].join("|")+"|$","g"),i=0,j="__p+='";b.replace(h,function(a,c,d,f,h){return j+=b.slice(i,h).replace(e,function(a){return"\\"+g[a]}),c&&(j+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(j+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),f&&(j+="';\n"+f+"\n__p+='"),i=h+a.length,a}),j+="';\n",d.variable||(j="with(obj||{}){\n"+j+"}\n"),j="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+j+"return __p;\n";try{f=new Function(d.variable||"obj","_",j)}catch(k){throw k.source=j,k}if(c)return f(c);var l=function(a){return f.call(this,a)};return l},eventorganiser.agenda_widget=function(b){this.param=b,moment.locale(EOAjaxFront.locale.locale,{months:EOAjaxFront.locale.monthNames,monthsShort:EOAjaxFront.locale.monthAbbrev,weekdays:EOAjaxFront.locale.dayNames,weekdaysShort:EOAjaxFront.locale.dayAbbrev,weekdaysMin:EOAjaxFront.locale.dayInitial}),this.start=moment().add(-1,"days"),this.end=moment().add(-1,"days"),this.$el=a("#"+this.param.id+"_container"),this.direction=1,this.eventTemplate=eventorganiser.template(a("#eo-tmpl-agenda-widget-item").html(),null,{variable:"event"}),this.groupTemplate=eventorganiser.template(a("#eo-tmpl-agenda-widget-group").html(),null,{variable:"group"})},eventorganiser.agenda_widget.prototype.group_change=function(a,b){return a===!1?!0:"day"!==this.param.mode?!1:a.format("YYYY-MM-DD")!==b.format("YYYY-MM-DD")},eventorganiser.agenda_widget.prototype.init=function(){this.$el.html(eventorganiser.template(a("#eo-tmpl-agenda-widget").html(),{},{variable:"data"})),this.$datesEl=this.$el.find(".dates"),this.load_events(),this.param.add_to_google&&this.$el.on("click",".event",function(){a(this).find(".meta").toggle("400")});var b=this;this.$el.on("click",".eo-agenda-widget-nav-prev,.eo-agenda-widget-nav-next",function(){a(this).hasClass("eo-agenda-widget-nav-prev")?b.direction=-1:b.direction=1,b.load_events()})},eventorganiser.agenda_widget.prototype.load_events=function(){var b=this;a.ajax({url:EOAjaxFront.adminajax,dataType:"JSON",data:{action:"eo_widget_agenda",instance_number:this.param.number,direction:this.direction,start:this.start.format("YYYY-MM-DD"),end:this.end.format("YYYY-MM-DD")},success:function(a){var c=a.length;if(0!==c){for(var d=0;c>d;d++)a[d].start=moment(a[d].start),a[d].end=moment(a[d].end);b.start=a[0].start,b.end=a[c-1].start,b.insert_events(a)}}})},eventorganiser.agenda_widget.prototype.insert_events=function(b){this.$datesEl.html("");for(var c=b.length,d=!1,e=!1,f=!1,g=0;c>g;g++){if(this.group_change(d,b[g].start)){this.$datesEl.append(e);var h={start:b[g].start};e=a(this.groupTemplate(h)),f=e.find(".a-date")}f.append(this.eventTemplate(b[g])),d=b[g].start}this.$datesEl.append(e)},jQuery(document).ready(function(a){if(a(".eo-agenda-widget").length>0)for(var b in eo_widget_agenda)agendaWidget=new eventorganiser.agenda_widget(eo_widget_agenda[b]),agendaWidget.init()})}(jQuery),eventorganiser.google_map=function(a){this.param=a,this.markers={},this.map=null},eventorganiser.google_map.prototype.load=function(){var a={zoom:this.param.zoom,scrollwheel:this.param.scrollwheel,zoomControl:this.param.zoomcontrol,rotateControl:this.param.rotatecontrol,panControl:this.param.pancontrol,overviewMapControl:this.param.overviewmapcontrol,streetViewControl:this.param.streetviewcontrol,draggable:this.param.draggable,mapTypeControl:this.param.maptypecontrol,mapTypeId:google.maps.MapTypeId[this.param.maptypeid],styles:this.param.styles,minZoom:this.param.minzoom,maxZoom:this.param.maxzoom};a=wp.hooks.applyFilters("eventorganiser.google_map_options",a,this.param),this.map=new google.maps.Map(document.getElementById(this.param.id),a);for(var b=new google.maps.LatLngBounds,c=[],d=0;d<this.param.locations.length;d++){var e=this.param.locations[d].lat,f=this.param.locations[d].lng;if(void 0!==e&&void 0!==f){c.push(new google.maps.LatLng(e,f)),b.extend(c[d]);var g=wp.hooks.applyFilters("eventorganiser.venue_marker_options",{venue_id:this.param.locations[d].venue_id,position:c[d],map:this.map,content:this.param.locations[d].tooltipContent,icon:this.param.locations[d].icon}),h=new google.maps.Marker(g);this.markers[this.param.locations[d].venue_id]=h,this.param.tooltip&&google.maps.event.addListener(h,"click",this.tooltip)}}this.param.locations.length>1?this.map.fitBounds(b):this.map.setCenter(c[0]),wp.hooks.doAction("eventorganiser.google_map_loaded",this)},eventorganiser.google_map.prototype.tooltip=function(){var a=this.getMap(),b=this.getMap().getProjection().fromLatLngToPoint(this.position),c=a.getProjection().fromLatLngToPoint(a.getBounds().getNorthEast()),d=a.getProjection().fromLatLngToPoint(a.getBounds().getSouthWest()),e=Math.pow(2,a.getZoom());b=new google.maps.Point((b.x-d.x)*e,(b.y-c.y)*e),wp.hooks.doAction("eventorganiser.venue_marker_clicked",this);var f=[b.x,b.y];return this.tooltip?(this.tooltip.qtip("api").set("position.target",f),void this.tooltip.qtip("show")):(jQuery(this.getMap().getDiv()).css({overflow:"visible"}),void(this.tooltip=jQuery("<div />").qtip({content:{text:this.content},border:{radius:4,width:3},style:{classes:"qtip-eo ui-tooltip-shadow",widget:!0},position:{at:"right center",my:"top center",target:f,container:jQuery(this.getMap().getDiv())},show:{ready:!0,event:!1,solo:!0},hide:{event:"mouseleave unfocus"}})))},jQuery(document).ready(function(){if("map"in eventorganiser)for(var a=eventorganiser.map,b=0;b<a.length;b++)if(null!==document.getElementById("eo_venue_map-"+(b+1))){var c=a[b];c.id="eo_venue_map-"+(b+1);var d=new eventorganiser.google_map(c);d.load(),eventorganiser.map[b].markers=d.markers}});