"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[62140],{75749:function(e,o,a){a.d(o,{Z:function(){return u}});var n=a(21068),i=a(40409),l=a(2784),s=a(95955),r=a.n(s),t=a(52322);function d(e){const{path:o="/",iterate:a,children:i}=e,s=(0,l.useContext)(n.Z),{data:d,handlePathChange:c}=s,u=d&&r().has(d,o)?r().get(d,o):void 0,m=(0,l.useMemo)((()=>c?(e,a)=>{c(`${o}${e}`,a)}:void 0),[c,o]);return a?Array.isArray(u)?(0,t.jsx)(t.Fragment,{children:u.map(((e,a)=>{const l=c?(e,n)=>{c(`${o}/${a}${e}`,n)}:void 0;return(0,t.jsx)(n.Z.Provider,{value:{...s,data:e,handlePathChange:l},children:i},`element${a}`)}))}):null:(0,t.jsx)(n.Z.Provider,{value:{...s,data:u,handlePathChange:m},children:i})}d._supportsEufemiaSpacingProps=!0;var c=d;var u={Context:n.Z,Provider:i.Z,At:c}},62282:function(e,o,a){a.d(o,{Z:function(){return re}});var n=a(2784),i=a(72779),l=a.n(i),s=a(16353),r=a(76412),t=a(75511),d=a(72858),c=d.Z,u=a(32831),m=a(96781),h=a(8160),v=a(27439),p=a(52322);function b(e){var o,a,i,d,b,f,g,x;const S=(0,n.useContext)(u.Z),C={...e,errorMessages:{required:null==S?void 0:S.translation.Forms.inputErrorRequired,minLength:null==S?void 0:S.translation.Forms.stringInputErrorMinLength.replace("{minLength}",null===(o=e.minLength)||void 0===o?void 0:o.toString()),maxLength:null==S?void 0:S.translation.Forms.stringInputErrorMaxLength.replace("{maxLength}",null===(a=e.maxLength)||void 0===a?void 0:a.toString()),pattern:null==S?void 0:S.translation.Forms.inputErrorPattern,...e.errorMessages},schema:null!==(i=e.schema)&&void 0!==i?i:{type:"string",minLength:e.minLength,maxLength:e.maxLength,pattern:e.pattern},fromInput:o=>{let{value:a,cleanedValue:n}=o;return""===a?e.emptyValue:null!=n?n:a},width:null!==(d=e.width)&&void 0!==d?d:"large"},{id:y,className:_,inputClassName:N,layout:M,type:Z,placeholder:E,label:k,labelDescription:w,labelSecondary:j,value:P,info:F,warning:I,error:A,disabled:B,help:L,multiline:R,leftIcon:T,rightIcon:G,clear:$,autoresize:q=!0,autoresizeMaxRows:K=6,characterCounter:V,mask:D,width:O,handleFocus:z,handleBlur:U,handleChange:H}=(0,h.Z)(C),W=V?e.maxLength?`${null!==(b=null==P?void 0:P.length)&&void 0!==b?b:"0"}/${e.maxLength}`:`${null!==(f=null==P?void 0:P.length)&&void 0!==f?f:"0"}`:void 0,J=l()("dnb-forms-field-string__input",N);return(0,p.jsx)(m.Z,{className:l()("dnb-forms-field-string",_),forId:y,layout:M,label:k,labelDescription:w,labelSecondary:null!=j?j:W,info:F,warning:I,error:A,contentsWidth:!1!==O?O:void 0,...(0,v.SR)(e),children:R?(0,p.jsx)(s.Z,{id:y,className:J,placeholder:E,value:P,suffix:L?(0,p.jsx)(r.Z,{title:L.title,left:"x-small",children:L.contents}):void 0,on_focus:z,on_blur:U,on_change:H,autoresize:q,autoresize_max_rows:K,disabled:B,stretch:void 0!==O}):D?(0,p.jsx)(c,{id:y,className:J,mask:D,placeholder:E,value:null!==(g=null==P?void 0:P.toString())&&void 0!==g?g:"",icon:null!=T?T:G,icon_position:G&&!T?"right":void 0,suffix:L?(0,p.jsx)(r.Z,{title:L.title,children:L.contents}):void 0,on_focus:z,on_blur:U,on_change:H,disabled:B,stretch:void 0!==O}):(0,p.jsx)(t.ZP,{id:y,className:J,type:Z,placeholder:E,value:null!==(x=null==P?void 0:P.toString())&&void 0!==x?x:"",icon:null!=T?T:G,icon_position:G&&!T?"right":void 0,clear:$,suffix:L?(0,p.jsx)(r.Z,{title:L.title,children:L.contents}):void 0,on_focus:z,on_blur:U,on_change:H,disabled:B,stretch:void 0!==O})})}b._supportsEufemiaSpacingProps=!0;var f=b;function g(e){var o,a;const{currency:i,percent:s,mask:t,thousandSeparator:c,decimalSymbol:u=",",decimalLimit:b=12,prefix:f,suffix:g,rightAligned:x}=e,S=(0,n.useMemo)((()=>i?{as_currency:i}:s?{as_percent:s}:{as_number:!0,mask:t,number_mask:{decimalLimit:b,decimalSymbol:u,includeThousandsSeparator:void 0!==c,thousandsSeparatorSymbol:!0===c?" ":c,prefix:f,suffix:g}}),[i,s,t,b,u,c,f,g]),C={...e,schema:null!==(o=e.schema)&&void 0!==o?o:{type:"number",minimum:e.minimum,maximum:e.maximum,exclusiveMinimum:e.exclusiveMinimum,exclusiveMaximum:e.exclusiveMaximum,multipleOf:e.multipleOf},toInput:e=>void 0===e?"":e,fromInput:e=>{let{value:o,numberValue:a}=e;return""===o?L:a},width:null!==(a=e.width)&&void 0!==a?a:"medium"},{id:y,className:_,inputClassName:N,layout:M,placeholder:Z,label:E,labelDescription:k,labelSecondary:w,value:j,disabled:P,info:F,warning:I,error:A,help:B,emptyValue:L,width:R,handleFocus:T,handleBlur:G,handleChange:$}=(0,h.Z)(C);return(0,p.jsx)(m.Z,{className:l()("dnb-forms-field-number",_),forId:y,layout:M,label:E,labelDescription:k,labelSecondary:w,info:F,warning:I,error:A,contentsWidth:!1!==R?R:void 0,...(0,v.SR)(e),children:(0,p.jsx)(d.Z,{id:y,className:l()("dnb-forms-field-number__input",N),placeholder:Z,value:j,...S,right:x,on_focus:T,on_blur:G,on_change:$,disabled:P,stretch:void 0!==R,suffix:B?(0,p.jsx)(r.Z,{title:B.title,children:B.contents}):void 0})})}g._supportsEufemiaSpacingProps=!0;var x=g,S=a(72151),C=a(90524),y=a(96844),_=a(80215),N=a(66151);function M(e){const o=(0,n.useContext)(u.Z),{id:a,className:i,valueOn:s,valueOff:r,layout:t,variant:d,disabled:c,label:b,labelDescription:f,labelSecondary:g,textOn:x,textOff:M,value:Z,info:E,warning:k,error:w,handleChange:j}=(0,h.Z)(e),P=(0,n.useCallback)((e=>{let{checked:o}=e;null==j||j(o?s:r)}),[j,s,r]),F=(0,n.useCallback)((()=>{Z!==s&&(null==j||j(s))}),[j,Z,s]),I=(0,n.useCallback)((()=>{Z!==r&&(null==j||j(r))}),[j,Z,r]),A=l()("dnb-forms-field-toggle",i),B={forId:a,className:A,...(0,v.SR)(e),info:E,warning:k,error:w},L={...B,layout:t,label:b,labelDescription:f,labelSecondary:g},R=Z===s;switch(d){default:case"checkbox":return(0,p.jsx)(m.Z,{...B,children:(0,p.jsx)(S.Z,{id:a,className:A,label:b,checked:R,disabled:c,on_change:P,...(0,v.SR)(e)})});case"button":return(0,p.jsx)(m.Z,{...L,children:(0,p.jsx)(C.Z,{id:a,text:R?null!=x?x:null==o?void 0:o.translation.Forms.booleanYes:null!=M?M:null==o?void 0:o.translation.Forms.booleanNo,checked:R,disabled:c,value:Z?"true":"false",on_change:P})});case"buttons":return(0,p.jsxs)(m.Z,{...L,children:[(0,p.jsxs)(N.Z,{children:[(0,p.jsx)(y.Z,{id:a,text:null!=x?x:null==o?void 0:o.translation.Forms.booleanYes,on_click:F,variant:R?void 0:"secondary",status:w?"error":void 0,disabled:c}),(0,p.jsx)(y.Z,{id:a,text:null!=M?M:null==o?void 0:o.translation.Forms.booleanNo,on_click:I,variant:R?"secondary":void 0,status:w?"error":void 0,disabled:c})]}),(0,p.jsx)(_.Z,{bottom:"x-small"})]});case"checkbox-button":return(0,p.jsx)(m.Z,{...L,children:(0,p.jsx)(C.Z,{id:a,variant:"checkbox",text:R?null!=x?x:null==o?void 0:o.translation.Forms.booleanYes:null!=M?M:null==o?void 0:o.translation.Forms.booleanNo,checked:R,disabled:c,value:Z?"true":"false",on_change:P})})}}M._supportsEufemiaSpacingProps=!0;var Z=M;function E(e){const o=(0,n.useContext)(u.Z),{trueText:a,falseText:i,...l}=e;return(0,p.jsx)(Z,{...l,valueOn:!0,valueOff:!1,textOn:null!=a?a:null==o?void 0:o.translation.Forms.booleanYes,textOff:null!=i?i:null==o?void 0:o.translation.Forms.booleanNo})}E._supportsEufemiaSpacingProps=!0;var k=E;function w(e){var o,a;const n={...e,currency:null!==(o=e.currency)&&void 0!==o?o:"NOK",placeholder:null!==(a=e.placeholder)&&void 0!==a?a:"kr"};return(0,p.jsx)(x,{...n,className:l()("dnb-forms-field-currency",e.className)})}w._supportsEufemiaSpacingProps=!0;var j=w,P=a(47081);function F(e){const o=(0,n.useContext)(u.Z),a={...e,fromInput:e=>{let{date:o}=e;return o}},{className:i,label:l,value:s,help:t,error:d,disabled:c,handleFocus:m,handleBlur:b,handleChange:f}=(0,h.Z)(a);return(0,p.jsx)(P.Z,{className:i,label:null!=l?l:null==o?void 0:o.translation.Forms.dateLabel,label_direction:"vertical",date:s,status:null==d?void 0:d.message,disabled:c,show_input:!0,show_cancel_button:!0,show_reset_button:!0,suffix:t?(0,p.jsx)(r.Z,{title:t.title,children:t.contents}):void 0,on_change:f,on_show:m,on_hide:b,...(0,v.SR)(e)})}F._supportsEufemiaSpacingProps=!0;var I=F;function A(e){var o,a,i;const l=(0,n.useContext)(u.Z),s={...e,type:null!==(o=e.type)&&void 0!==o?o:"email",pattern:null!==(a=e.pattern)&&void 0!==a?a:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",label:null!==(i=e.label)&&void 0!==i?i:null==l?void 0:l.translation.Forms.emailLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.emailErrorRequired,pattern:null==l?void 0:l.translation.Forms.emailErrorPattern,...e.errorMessages}};return(0,p.jsx)(f,{...s})}A._supportsEufemiaSpacingProps=!0;var B=A;function L(e){var o,a,i;const l=(0,n.useContext)(u.Z),{validate:s=!0,omitMask:r}=e,t={...e,pattern:null!==(o=e.pattern)&&void 0!==o?o:s?"^[0-9]{11}$":void 0,label:null!==(a=e.label)&&void 0!==a?a:null==l?void 0:l.translation.Forms.nationalIdentityNumberLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.nationalIdentityNumberErrorRequired,pattern:null==l?void 0:l.translation.Forms.nationalIdentityNumberErrorPattern,...e.errorMessages},mask:r?[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]:[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/,/\d/],width:null!==(i=e.width)&&void 0!==i?i:"medium"};return(0,p.jsx)(f,{...t})}L._supportsEufemiaSpacingProps=!0;var R=L,T=a(34107),G=a(25807),$=[{name:"Afghanistan",code:"93",iso:"AF"},{name:"Albania",code:"355",iso:"AL"},{name:"Algeria",code:"213",iso:"DZ"},{name:"American Samoa",code:"1-684",iso:"AS"},{name:"Andorra",code:"376",iso:"AD"},{name:"Angola",code:"244",iso:"AO"},{name:"Anguilla",code:"1-264",iso:"AI"},{name:"Antarctica",code:"672",iso:"AQ"},{name:"Antigua and Barbuda",code:"1-268",iso:"AG"},{name:"Argentina",code:"54",iso:"AR"},{name:"Armenia",code:"374",iso:"AM"},{name:"Aruba",code:"297",iso:"AW"},{name:"Australia",code:"61",iso:"AU"},{name:"Austria",code:"43",iso:"AT"},{name:"Azerbaijan",code:"994",iso:"AZ"},{name:"Bahamas",code:"1-242",iso:"BS"},{name:"Bahrain",code:"973",iso:"BH"},{name:"Bangladesh",code:"880",iso:"BD"},{name:"Barbados",code:"1-246",iso:"BB"},{name:"Belarus",code:"375",iso:"BY"},{name:"Belgium",code:"32",iso:"BE"},{name:"Belize",code:"501",iso:"BZ"},{name:"Benin",code:"229",iso:"BJ"},{name:"Bermuda",code:"1-441",iso:"BM"},{name:"Bhutan",code:"975",iso:"BT"},{name:"Bolivia",code:"591",iso:"BO"},{name:"Bosnia and Herzegovina",code:"387",iso:"BA"},{name:"Botswana",code:"267",iso:"BW"},{name:"Brazil",code:"55",iso:"BR"},{name:"British Indian Ocean Territory",code:"246",iso:"IO"},{name:"British Virgin Islands",code:"1-284",iso:"VG"},{name:"Brunei",code:"673",iso:"BN"},{name:"Bulgaria",code:"359",iso:"BG"},{name:"Burkina Faso",code:"226",iso:"BF"},{name:"Burundi",code:"257",iso:"BI"},{name:"Cambodia",code:"855",iso:"KH"},{name:"Cameroon",code:"237",iso:"CM"},{name:"Canada",code:"1",iso:"CA"},{name:"Cape Verde",code:"238",iso:"CV"},{name:"Cayman Islands",code:"1-345",iso:"KY"},{name:"Central African Republic",code:"236",iso:"CF"},{name:"Chad",code:"235",iso:"TD"},{name:"Chile",code:"56",iso:"CL"},{name:"China",code:"86",iso:"CN"},{name:"Christmas Island",code:"61",iso:"CX"},{name:"Cocos Islands",code:"61",iso:"CC"},{name:"Colombia",code:"57",iso:"CO"},{name:"Comoros",code:"269",iso:"KM"},{name:"Cook Islands",code:"682",iso:"CK"},{name:"Costa Rica",code:"506",iso:"CR"},{name:"Croatia",code:"385",iso:"HR"},{name:"Cuba",code:"53",iso:"CU"},{name:"Curacao",code:"599",iso:"CW"},{name:"Cyprus",code:"357",iso:"CY"},{name:"Czech Republic",code:"420",iso:"CZ"},{name:"Democratic Republic of the Congo",code:"243",iso:"CD"},{name:"Denmark",code:"45",iso:"DK"},{name:"Djibouti",code:"253",iso:"DJ"},{name:"Dominica",code:"1-767",iso:"DM"},{name:"Dominican Republic",code:"1-809, 1-829, 1-849",iso:"DO"},{name:"East Timor",code:"670",iso:"TL"},{name:"Ecuador",code:"593",iso:"EC"},{name:"Egypt",code:"20",iso:"EG"},{name:"El Salvador",code:"503",iso:"SV"},{name:"Equatorial Guinea",code:"240",iso:"GQ"},{name:"Eritrea",code:"291",iso:"ER"},{name:"Estonia",code:"372",iso:"EE"},{name:"Ethiopia",code:"251",iso:"ET"},{name:"Falkland Islands",code:"500",iso:"FK"},{name:"Faroe Islands",code:"298",iso:"FO"},{name:"Fiji",code:"679",iso:"FJ"},{name:"Finland",code:"358",iso:"FI"},{name:"France",code:"33",iso:"FR"},{name:"French Polynesia",code:"689",iso:"PF"},{name:"Gabon",code:"241",iso:"GA"},{name:"Gambia",code:"220",iso:"GM"},{name:"Georgia",code:"995",iso:"GE"},{name:"Germany",code:"49",iso:"DE"},{name:"Ghana",code:"233",iso:"GH"},{name:"Gibraltar",code:"350",iso:"GI"},{name:"Greece",code:"30",iso:"GR"},{name:"Greenland",code:"299",iso:"GL"},{name:"Grenada",code:"1-473",iso:"GD"},{name:"Guam",code:"1-671",iso:"GU"},{name:"Guatemala",code:"502",iso:"GT"},{name:"Guernsey",code:"44-1481",iso:"GG"},{name:"Guinea",code:"224",iso:"GN"},{name:"Guinea-Bissau",code:"245",iso:"GW"},{name:"Guyana",code:"592",iso:"GY"},{name:"Haiti",code:"509",iso:"HT"},{name:"Honduras",code:"504",iso:"HN"},{name:"Hong Kong",code:"852",iso:"HK"},{name:"Hungary",code:"36",iso:"HU"},{name:"Iceland",code:"354",iso:"IS"},{name:"India",code:"91",iso:"IN"},{name:"Indonesia",code:"62",iso:"ID"},{name:"Iran",code:"98",iso:"IR"},{name:"Iraq",code:"964",iso:"IQ"},{name:"Ireland",code:"353",iso:"IE"},{name:"Isle of Man",code:"44-1624",iso:"IM"},{name:"Israel",code:"972",iso:"IL"},{name:"Italy",code:"39",iso:"IT"},{name:"Ivory Coast",code:"225",iso:"CI"},{name:"Jamaica",code:"1-876",iso:"JM"},{name:"Japan",code:"81",iso:"JP"},{name:"Jersey",code:"44-1534",iso:"JE"},{name:"Jordan",code:"962",iso:"JO"},{name:"Kazakhstan",code:"7",iso:"KZ"},{name:"Kenya",code:"254",iso:"KE"},{name:"Kiribati",code:"686",iso:"KI"},{name:"Kosovo",code:"383",iso:"XK"},{name:"Kuwait",code:"965",iso:"KW"},{name:"Kyrgyzstan",code:"996",iso:"KG"},{name:"Laos",code:"856",iso:"LA"},{name:"Latvia",code:"371",iso:"LV"},{name:"Lebanon",code:"961",iso:"LB"},{name:"Lesotho",code:"266",iso:"LS"},{name:"Liberia",code:"231",iso:"LR"},{name:"Libya",code:"218",iso:"LY"},{name:"Liechtenstein",code:"423",iso:"LI"},{name:"Lithuania",code:"370",iso:"LT"},{name:"Luxembourg",code:"352",iso:"LU"},{name:"Macao",code:"853",iso:"MO"},{name:"Macedonia",code:"389",iso:"MK"},{name:"Madagascar",code:"261",iso:"MG"},{name:"Malawi",code:"265",iso:"MW"},{name:"Malaysia",code:"60",iso:"MY"},{name:"Maldives",code:"960",iso:"MV"},{name:"Mali",code:"223",iso:"ML"},{name:"Malta",code:"356",iso:"MT"},{name:"Marshall Islands",code:"692",iso:"MH"},{name:"Mauritania",code:"222",iso:"MR"},{name:"Mauritius",code:"230",iso:"MU"},{name:"Mayotte",code:"262",iso:"YT"},{name:"Mexico",code:"52",iso:"MX"},{name:"Micronesia",code:"691",iso:"FM"},{name:"Moldova",code:"373",iso:"MD"},{name:"Monaco",code:"377",iso:"MC"},{name:"Mongolia",code:"976",iso:"MN"},{name:"Montenegro",code:"382",iso:"ME"},{name:"Montserrat",code:"1-664",iso:"MS"},{name:"Morocco",code:"212",iso:"MA"},{name:"Mozambique",code:"258",iso:"MZ"},{name:"Myanmar",code:"95",iso:"MM"},{name:"Namibia",code:"264",iso:"NA"},{name:"Nauru",code:"674",iso:"NR"},{name:"Nepal",code:"977",iso:"NP"},{name:"Netherlands",code:"31",iso:"NL"},{name:"Netherlands Antilles",code:"599",iso:"AN"},{name:"New Caledonia",code:"687",iso:"NC"},{name:"New Zealand",code:"64",iso:"NZ"},{name:"Nicaragua",code:"505",iso:"NI"},{name:"Niger",code:"227",iso:"NE"},{name:"Nigeria",code:"234",iso:"NG"},{name:"Niue",code:"683",iso:"NU"},{name:"North Korea",code:"850",iso:"KP"},{name:"Northern Mariana Islands",code:"1-670",iso:"MP"},{name:"Norway",code:"47",iso:"NO"},{name:"Oman",code:"968",iso:"OM"},{name:"Pakistan",code:"92",iso:"PK"},{name:"Palau",code:"680",iso:"PW"},{name:"Palestine",code:"970",iso:"PS"},{name:"Panama",code:"507",iso:"PA"},{name:"Papua New Guinea",code:"675",iso:"PG"},{name:"Paraguay",code:"595",iso:"PY"},{name:"Peru",code:"51",iso:"PE"},{name:"Philippines",code:"63",iso:"PH"},{name:"Pitcairn",code:"64",iso:"PN"},{name:"Poland",code:"48",iso:"PL"},{name:"Portugal",code:"351",iso:"PT"},{name:"Puerto Rico",code:"1-787, 1-939",iso:"PR"},{name:"Qatar",code:"974",iso:"QA"},{name:"Republic of the Congo",code:"242",iso:"CG"},{name:"Reunion",code:"262",iso:"RE"},{name:"Romania",code:"40",iso:"RO"},{name:"Russia",code:"7",iso:"RU"},{name:"Rwanda",code:"250",iso:"RW"},{name:"Saint Barthelemy",code:"590",iso:"BL"},{name:"Saint Helena",code:"290",iso:"SH"},{name:"Saint Kitts and Nevis",code:"1-869",iso:"KN"},{name:"Saint Lucia",code:"1-758",iso:"LC"},{name:"Saint Martin",code:"590",iso:"MF"},{name:"Saint Pierre and Miquelon",code:"508",iso:"PM"},{name:"Saint Vincent and the Grenadines",code:"1-784",iso:"VC"},{name:"Samoa",code:"685",iso:"WS"},{name:"San Marino",code:"378",iso:"SM"},{name:"Sao Tome and Principe",code:"239",iso:"ST"},{name:"Saudi Arabia",code:"966",iso:"SA"},{name:"Senegal",code:"221",iso:"SN"},{name:"Serbia",code:"381",iso:"RS"},{name:"Seychelles",code:"248",iso:"SC"},{name:"Sierra Leone",code:"232",iso:"SL"},{name:"Singapore",code:"65",iso:"SG"},{name:"Sint Maarten",code:"1-721",iso:"SX"},{name:"Slovakia",code:"421",iso:"SK"},{name:"Slovenia",code:"386",iso:"SI"},{name:"Solomon Islands",code:"677",iso:"SB"},{name:"Somalia",code:"252",iso:"SO"},{name:"South Africa",code:"27",iso:"ZA"},{name:"South Korea",code:"82",iso:"KR"},{name:"South Sudan",code:"211",iso:"SS"},{name:"Spain",code:"34",iso:"ES"},{name:"Sri Lanka",code:"94",iso:"LK"},{name:"Sudan",code:"249",iso:"SD"},{name:"Suriname",code:"597",iso:"SR"},{name:"Svalbard and Jan Mayen",code:"47",iso:"SJ"},{name:"Swaziland",code:"268",iso:"SZ"},{name:"Sweden",code:"46",iso:"SE"},{name:"Switzerland",code:"41",iso:"CH"},{name:"Syria",code:"963",iso:"SY"},{name:"Taiwan",code:"886",iso:"TW"},{name:"Tajikistan",code:"992",iso:"TJ"},{name:"Tanzania",code:"255",iso:"TZ"},{name:"Thailand",code:"66",iso:"TH"},{name:"Togo",code:"228",iso:"TG"},{name:"Tokelau",code:"690",iso:"TK"},{name:"Tonga",code:"676",iso:"TO"},{name:"Trinidad and Tobago",code:"1-868",iso:"TT"},{name:"Tunisia",code:"216",iso:"TN"},{name:"Turkey",code:"90",iso:"TR"},{name:"Turkmenistan",code:"993",iso:"TM"},{name:"Turks and Caicos Islands",code:"1-649",iso:"TC"},{name:"Tuvalu",code:"688",iso:"TV"},{name:"U.S. Virgin Islands",code:"1-340",iso:"VI"},{name:"Uganda",code:"256",iso:"UG"},{name:"Ukraine",code:"380",iso:"UA"},{name:"United Arab Emirates",code:"971",iso:"AE"},{name:"United Kingdom",code:"44",iso:"GB"},{name:"United States",code:"1",iso:"US"},{name:"Uruguay",code:"598",iso:"UY"},{name:"Uzbekistan",code:"998",iso:"UZ"},{name:"Vanuatu",code:"678",iso:"VU"},{name:"Vatican",code:"379",iso:"VA"},{name:"Venezuela",code:"58",iso:"VE"},{name:"Vietnam",code:"84",iso:"VN"},{name:"Wallis and Futuna",code:"681",iso:"WF"},{name:"Western Sahara",code:"212",iso:"EH"},{name:"Yemen",code:"967",iso:"YE"},{name:"Zambia",code:"260",iso:"ZM"},{name:"Zimbabwe",code:"263",iso:"ZW"}];function q(e){var o;const a=(0,n.useContext)(u.Z),{className:i,layout:s="vertical",placeholder:t,label:d=(null==a?void 0:a.translation.Forms.countryCodeLabel),value:c,emptyValue:m,info:b,warning:f,error:g,disabled:x,help:S,width:C,handleFocus:y,handleBlur:_,handleChange:N}=(0,h.Z)(e),M=(0,n.useMemo)((()=>$.map((e=>({selected_key:`+${e.code}`,selected_value:`${e.iso} (+${e.code})`,content:`+${e.code} ${e.name}`})))),[]),Z=(0,n.useCallback)((e=>{let{data:o}=e;o&&o.selected_key.trim()?null==N||N(null==o?void 0:o.selected_key):null==N||N(m)}),[m,N]),E=M.findIndex((e=>e.selected_key===c));return(0,p.jsx)(G.Z,{className:l()("dnb-forms-field-country-code",void 0!==C&&`dnb-forms-field-country-code--width-${C}`,i),placeholder:null!=t?t:" ",label_direction:s,label:d,data:M,value:E,disabled:x,on_focus:y,on_blur:_,on_change:Z,status:null!==(o=null==g?void 0:g.message)&&void 0!==o?o:f instanceof Error&&f.message||f instanceof v.Xq&&f.message||(null==f?void 0:f.toString())||b instanceof Error&&b.message||b instanceof v.Xq&&b.message||(null==b?void 0:b.toString()),suffix:S?(0,p.jsx)(r.Z,{title:S.title,children:S.contents}):void 0,independent_width:!0,search_numbers:!0,...(0,v.SR)(e),stretch:"stretch"===C})}q._supportsEufemiaSpacingProps=!0;var K=q;function V(e){const o=(0,n.useContext)(u.Z),a={...e,value:"+47",errorMessages:{required:null==o?void 0:o.translation.Forms.phoneNumberErrorRequired,...null==e?void 0:e.errorMessages}},{className:i,countryCodeFieldClassName:s,numberFieldClassName:r,placeholder:t,countryCodeLabel:d,label:c=(null==o?void 0:o.translation.Forms.phoneNumberLabel),value:m,numberMask:b,emptyValue:g,info:x,warning:S,error:C,disabled:y,width:_="large",handleFocus:N,handleBlur:M,handleChange:Z,onCountryCodeChange:E,onNumberChange:k}=(0,h.Z)(a),[,w,j]=void 0!==m?m.match(/^(\+[^ ]+)? ?(.*)$/):[void 0,"",""],P=(0,n.useCallback)((e=>{if(!e&&!j)return null==Z||Z(g),void(null==E||E(g));null==Z||Z([e,j].filter(Boolean).join(" ")),null==E||E(e)}),[j,g,Z,E]),F=(0,n.useCallback)((e=>{if(!w&&!e)return null==Z||Z(g),void(null==k||k(g));null==Z||Z([w,e].filter(Boolean).join(" ")),null==k||k(e)}),[w,g,Z,k]);return(0,p.jsxs)(T.Z,{className:l()("dnb-forms-field-phone-number",void 0!==_&&`dnb-forms-field-phone-number--width-${_}`,i),...(0,v.SR)(a),children:[(0,p.jsx)(K,{className:l()("dnb-forms-field-phone-number__country-code",s),label:d,value:null!=w?w:"+47",disabled:y,onChange:P}),(0,p.jsx)(f,{className:l()("dnb-forms-field-phone-number__number",r),type:"tel",emptyValue:"",layout:"vertical",label:null!=c?c:" ",placeholder:null!=t?t:"00 00 00 00",mask:null!=b?b:[/\d/,/\d/," ",/\d/,/\d/," ",/\d/,/\d/," ",/\d/,/\d/],onFocus:N,onBlur:M,onChange:F,value:j,info:x,warning:S,error:C,disabled:y,width:"stretch"})]})}V._supportsEufemiaSpacingProps=!0;var D=V;function O(e){var o,a,i;const l=(0,n.useContext)(u.Z),{validate:s=!0,omitMask:r}=e,t={...e,className:"dnb-forms-field-organization-number",pattern:null!==(o=e.pattern)&&void 0!==o?o:s?"^[0-9]{9}$":void 0,label:null!==(a=e.label)&&void 0!==a?a:null==l?void 0:l.translation.Forms.organizationNumberLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.organizationNumberErrorRequired,pattern:null==l?void 0:l.translation.Forms.organizationNumberErrorPattern,...e.errorMessages},mask:r?[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]:[/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/],width:null!==(i=e.width)&&void 0!==i?i:"medium"};return(0,p.jsx)(f,{...t})}O._supportsEufemiaSpacingProps=!0;var z=O;function U(e){var o,a,i,s;const r=(0,n.useContext)(u.Z),{postalCode:t={},city:d={},width:c="large",...h}=e;return(0,p.jsx)(m.Z,{className:l()("dnb-forms-field-postal-code-and-city",e.className),...h,children:(0,p.jsxs)("div",{className:l()("dnb-forms-field-postal-code-and-city__fields",void 0!==c&&`dnb-forms-field-postal-code-and-city--width-${c}`),children:[(0,p.jsx)(f,{...t,pattern:null!==(o=t.pattern)&&void 0!==o?o:"^[0-9]{4}$",className:l()("dnb-forms-field-postal-code-and-city__postal-code",t.className),label:null!==(a=t.label)&&void 0!==a?a:null==r?void 0:r.translation.Forms.postalCodeLabel,errorMessages:{required:null==r?void 0:r.translation.Forms.postalCodeErrorRequired,pattern:null==r?void 0:r.translation.Forms.postalCodeErrorPattern,...t.errorMessages},placeholder:null!==(i=t.placeholder)&&void 0!==i?i:"0000",width:!1,inputClassName:"dnb-forms-field-postal-code-and-city__postal-code-input"}),(0,p.jsx)(f,{...d,className:l()("dnb-forms-field-postal-code-and-city__city",d.className),label:null!==(s=d.label)&&void 0!==s?s:null==r?void 0:r.translation.Forms.cityLabel,errorMessages:{required:null==r?void 0:r.translation.Forms.cityErrorRequired,...d.errorMessages},width:"stretch"})]})})}U._supportsEufemiaSpacingProps=!0;var H=U,W=a(84616),J=a(20167),Y=a(469),X=a(66485);function Q(e){let{className:o,title:a,text:n,children:i}=e;return(0,p.jsxs)("span",{className:l()("dnb-forms-field-option",o),role:"option",children:[null!=i?i:a,n]})}function ee(e){const o=(0,n.useContext)(u.Z),a=(0,n.useMemo)((()=>`clear-option-${(0,X.Xo)()}`),[]),{id:i,className:s,variant:t="dropdown",clear:d,label:c,labelDescription:b,labelSecondary:f,layout:g="vertical",optionsLayout:x="vertical",placeholder:S,value:C,info:_,warning:M,error:Z,disabled:E,help:k,emptyValue:w,width:j="large",setHasFocus:P,handleChange:F,children:I}=(0,h.Z)(e),A=(0,n.useCallback)((e=>{let{data:{selected_key:o}}=e;null==F||F(o&&o!==a?o:w)}),[F,w,a]),B=(0,n.useCallback)((e=>{let{value:o}=e;null==F||F(void 0===o?w:o)}),[F,w]),L=(0,n.useCallback)((e=>{let{data:o}=e;P(!0,null==o?void 0:o.selected_key)}),[P]),R=(0,n.useCallback)((e=>{let{data:o}=e;P(!1,null==o?void 0:o.selected_key)}),[P]),T=l()("dnb-forms-field-selection",s),G={forId:i,className:T,...(0,v.SR)(e),info:_,warning:M,error:Z,layout:g,label:c,labelDescription:b,labelSecondary:f},$=(0,n.useMemo)((()=>n.Children.toArray(I).filter((e=>n.isValidElement(e)&&e.type===Q)).map((e=>{var o;return{title:null!==(o=e.props.title)&&void 0!==o?o:e.props.children,value:e.props.value,handleSelect:()=>{const o=e.props.value;null==F||F(o===C?w:o)}}}))),[I,C,w,F]);switch(t){case"radio":return(0,p.jsx)(J.Z.Group,{className:T,label:c,layout_direction:"horizontal"===x?"row":"column",vertical:"vertical"===g,on_change:B,value:String(null!=C?C:""),...(0,v.SR)(e),children:$.map(((e,o)=>{var a;return(0,p.jsx)(J.Z,{label:e.title,value:String(null!==(a=e.value)&&void 0!==a?a:"")},`option-${o}-${e.value}`)}))});case"button":return(0,p.jsx)(m.Z,{...G,children:(0,p.jsx)(N.Z,{children:$.map(((e,o)=>(0,p.jsx)(y.Z,{id:i,text:e.title,on_click:e.handleSelect,variant:e.value===C?void 0:"secondary",status:Z?"error":void 0,disabled:E},`option-${o}-${e.value}`)))})});case"dropdown":{var q;const i=n.Children.map(I,(e=>{var o,a,i,l;return n.isValidElement(e)&&e.type===Q?e.props.text?{selected_key:String(null!==(o=e.props.value)&&void 0!==o?o:""),content:[null!==(a=null!==(i=e.props.title)&&void 0!==i?i:e.props.children)&&void 0!==a?a:(0,p.jsx)("em",{children:"Untitled"}),e.props.text]}:{selected_key:e.props.value,content:null!==(l=e.props.title)&&void 0!==l?l:e.props.children}:{content:e}})),t=[d?{selected_key:a,content:(0,p.jsx)("em",{children:null==o?void 0:o.translation.Forms.selectionClearSelected})}:void 0].concat((0,W.Z)(null!=i?i:[])).filter(Boolean);return(0,p.jsx)(Y.Z,{className:l()("dnb-forms-field-selection","stretch"!==j&&`dnb-forms-field-selection--width-${j}`,s),list_class:"dnb-forms-field-selection__list",portal_class:"dnb-forms-field-selection__portal",title:S,value:String(null!=C?C:""),label:c,label_direction:g,status:null!==(q=null==Z?void 0:Z.message)&&void 0!==q?q:M instanceof Error&&M.message||M instanceof v.Xq&&M.message||(null==M?void 0:M.toString())||_ instanceof Error&&_.message||_ instanceof v.Xq&&_.message||(null==_?void 0:_.toString()),disabled:E,data:t,suffix:k?(0,p.jsx)(r.Z,{title:k.title,children:k.contents}):void 0,on_change:A,on_show:L,on_hide:R,...(0,v.SR)(e),stretch:"stretch"===j})}}}ee._supportsEufemiaSpacingProps=!0;var oe=ee;function ae(e){const{id:o,className:a,variant:i="checkbox",layout:s="vertical",optionsLayout:r="vertical",label:t,labelDescription:d,labelSecondary:c,value:u,error:b,info:f,warning:g,disabled:x,emptyValue:C,handleChange:_,children:M}=(0,h.Z)(e),Z={forId:o,className:l()("dnb-forms-field-array-selection",`dnb-forms-field-array-selection--options-layout-${r}`,a),contentClassName:"dnb-forms-field-array-selection__options",info:f,warning:g,error:b,layout:s,label:t,labelDescription:d,labelSecondary:c,...(0,v.SR)(e)},E=(0,n.useMemo)((()=>n.Children.toArray(M).filter((e=>n.isValidElement(e)&&e.type===Q)).map((e=>{var o;return{title:null!==(o=e.props.title)&&void 0!==o?o:e.props.children,value:e.props.value,handleSelect:()=>{const o=e.props.value,a=null!=u&&u.includes(o)?u.filter((e=>e!==o)):[].concat((0,W.Z)(null!=u?u:[]),[o]);null==_||_(0===a.length?C:a)}}}))),[M,u,C,_]);switch(i){case"button":return(0,p.jsx)(m.Z,{...Z,children:(0,p.jsx)(N.Z,{children:E.map(((e,a)=>(0,p.jsx)(y.Z,{id:o,text:e.title,on_click:e.handleSelect,variant:null!=u&&u.includes(e.value)?void 0:"secondary",status:b?"error":void 0,disabled:x},`option-${a}-${e.value}`)))})});case"checkbox":return(0,p.jsx)(m.Z,{...Z,children:E.map(((e,o)=>(0,p.jsx)(S.Z,{className:"dnb-forms-field-array-selection__checkbox",label:e.title,checked:null==u?void 0:u.includes(e.value),disabled:x,on_change:e.handleSelect},`option-${o}-${e.value}`)))})}}ae._supportsEufemiaSpacingProps=!0;var ne=ae;function ie(e){var o,a;const i=(0,n.useContext)(u.Z),l={...e,placeholder:null!==(o=e.placeholder)&&void 0!==o?o:null==i?void 0:i.translation.Forms.selectCountryPlaceholder,label:null!==(a=e.label)&&void 0!==a?a:null==i?void 0:i.translation.Forms.selectCountryLabel,errorMessages:{required:null==i?void 0:i.translation.Forms.selectCountryErrorRequired,...e.errorMessages}};return(0,p.jsx)(oe,{...l,children:$.map((e=>(0,p.jsx)(Q,{value:e.iso,title:e.name},e.iso)))})}ie._supportsEufemiaSpacingProps=!0;var le=ie;function se(e){var o,a,i;const l=(0,n.useContext)(u.Z),{validate:s=!0,omitMask:r}=e,t={...e,className:"dnb-forms-field-bank-account-number",pattern:null!==(o=e.pattern)&&void 0!==o?o:s?"^[0-9]{11}$":void 0,label:null!==(a=e.label)&&void 0!==a?a:null==l?void 0:l.translation.Forms.bankAccountNumberLabel,errorMessages:{required:null==l?void 0:l.translation.Forms.bankAccountNumberErrorRequired,pattern:null==l?void 0:l.translation.Forms.bankAccountNumberErrorPattern,...e.errorMessages},mask:r?[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/,/\d/],width:null!==(i=e.width)&&void 0!==i?i:"medium"};return(0,p.jsx)(f,{...t})}se._supportsEufemiaSpacingProps=!0;var re={String:f,Number:x,Toggle:Z,Boolean:k,Currency:j,Date:I,Email:B,NationalIdentityNumber:R,OrganizationNumber:z,PhoneNumber:D,PostalCodeAndCity:H,Selection:oe,ArraySelection:ne,Option:Q,SelectCountry:le,BankAccountNumber:se,CountryCode:K}},96781:function(e,o,a){var n=a(2784),i=a(72779),l=a.n(i),s=a(34107),r=a(65731),t=a(94799),d=a(79583),c=a(27439),u=a(31270),m=a(52322);function h(e){const o=(0,n.useContext)(u.Z),{className:a,forId:i,layout:h="vertical",label:v,labelDescription:p,labelSecondary:b,info:f,warning:g,error:x,width:S,contentsWidth:C,contentClassName:y,children:_}=e,{0:N,1:M}=(0,n.useState)({}),{0:Z,1:E}=(0,n.useState)({}),k=(0,n.useCallback)(((e,a)=>{o?o.setError(e,a):M((o=>{if(a)return{...o,[e]:a};{const{[e]:a,...n}=o;return n}}))}),[o]),w=(0,n.useCallback)(((e,a)=>{o?o.setShowError(e,a):E((o=>{if(a)return{...o,[e]:!0};{const{[e]:a,...n}=o;return n}}))}),[o]),j=(0,n.useMemo)((()=>{if(x)return x;const e=Object.entries(N).filter((e=>{let[o]=e;return!0===Z[o]})).map((e=>{let[,o]=e;return o}));return e.length>0?new Error(e.map((e=>e.message)).join(" | ")):void 0}),[x,N,Z]),P=l()("dnb-forms-field-block",`dnb-forms-field-block--layout-${h}`,void 0!==S&&`dnb-forms-field-block--width-${S}`,a);return(0,m.jsx)(u.Z.Provider,{value:{setError:k,setShowError:w},children:(0,m.jsxs)(s.Z,{className:P,...(0,c.SR)(e),children:[p||b?(0,m.jsxs)("div",{className:l()("dnb-forms-field-block__label"),children:[v||p?(0,m.jsxs)(t.Z,{for_id:i,space:{bottom:"x-small"},children:[v,p&&(0,m.jsx)("span",{className:"dnb-forms-field-block__label-description",children:p})]}):(0,m.jsx)(m.Fragment,{children:" "}),b&&(0,m.jsx)(r.Z,{className:"dnb-forms-field-block__label-secondary",children:b})]}):v&&(0,m.jsx)(t.Z,{for_id:i,space:{bottom:"x-small"},children:v}),(0,m.jsx)("div",{className:l()("dnb-forms-field-block__contents",void 0!==C&&`dnb-forms-field-block__contents--width-${C}`,y),children:_}),j&&(0,m.jsx)("div",{className:"dnb-forms-field-block__status",children:(0,m.jsx)(d.ZP,{state:"error",id:i?`${i}-form-status`:void 0,text:null==j?void 0:j.message,label:v,space:{top:"x-small"}})})||g&&(0,m.jsx)("div",{className:"dnb-forms-field-block__status",children:(0,m.jsx)(d.ZP,{state:"warn",id:i?`${i}-form-status`:void 0,text:g instanceof Error&&g.message||g instanceof c.Xq&&g.message||(null==g?void 0:g.toString()),label:v,space:{top:"x-small"}})})||f&&(0,m.jsx)("div",{className:"dnb-forms-field-block__status",children:(0,m.jsx)(d.ZP,{state:"info",id:i?`${i}-form-status`:void 0,text:f instanceof Error&&f.message||f instanceof c.Xq&&f.message||(null==f?void 0:f.toString()),label:v,space:{top:"x-small"}})})]})})}h._supportsEufemiaSpacingProps=!0,o.Z=h},31270:function(e,o,a){const n=a(2784).createContext(void 0);o.Z=n},38875:function(e,o,a){const n=a(2784).createContext(void 0);o.Z=n},66151:function(e,o,a){var n=a(72779),i=a.n(n),l=a(34107),s=a(27439),r=a(52322);function t(e){const{className:o,children:a}=e;return(0,r.jsx)(l.Z,{className:i()("dnb-forms-button-row",o),...(0,s.SR)(e),children:a})}t._supportsEufemiaSpacingProps=!0,o.Z=t},8160:function(e,o,a){a.d(o,{Z:function(){return m}});var n=a(2784),i=a(95955),l=a.n(i),s=a(27439),r=a(34763),t=a(75749),d=a(31270),c=a(38875),u=a(66485);function m(e){const{path:o,elementPath:a,emptyValue:i,required:m,error:h,onFocus:v,onBlur:p,onChange:b,validator:f,onBlurValidator:g,schema:x,errorMessages:S,validateInitially:C,validateUnchanged:y,toInput:_=(e=>e),fromInput:N=(e=>e)}=e,M=(0,n.useMemo)((()=>{var o;return null!==(o=e.id)&&void 0!==o?o:(0,u.Xo)()}),[e.id]),Z=(0,n.useContext)(t.Z.Context),E=(0,n.useContext)(d.Z),k=(0,n.useContext)(c.Z),{handlePathChange:w,setPathWithError:j,errors:P}=null!=Z?Z:{},F=Boolean(E),{setError:I,setShowError:A}=null!=E?E:{},B=Boolean(k),{index:L,value:R,handleChange:T}=null!=k?k:{};if(o&&"/"!==o.substring(0,1))throw new Error("Invalid path. Data value path JSON Pointers must be from root (starting with a /).");if(a&&"/"!==a.substring(0,1))throw new Error("Invalid elementPath. Element pathJSON Pointers must be from root of iterate element (starting with a /).");if(a&&!k)throw new Error("elementPath cannot be used when not inside an iterate element context. Wrap the component in an Iterate.Loop.");const G=(0,n.useMemo)((()=>void 0!==e.value?e.value:B&&a?"/"===a?R:l().has(R,a)?l().get(R,a):void 0:Z.data&&o?"/"===o?Z.data:l().has(Z.data,o)?l().get(Z.data,o):void 0:void 0),[o,a,B,R,e.value,Z.data]),{0:$,1:q}=(0,n.useState)(G),K=(0,n.useRef)(!1);(0,n.useEffect)((()=>{q(G)}),[G]);const{0:V,1:D}=(0,n.useState)(),{0:O,1:z}=(0,n.useState)(Boolean(C||h)),U=(0,n.useMemo)((()=>x&&Object.keys(x).length>0?r.ZP.compile(x):void 0),[x]),H=(0,n.useCallback)((e=>{const a=e instanceof s.Xq&&"string"==typeof e.validationRule&&void 0!==(null==S?void 0:S[e.validationRule])?new s.Xq(S[e.validationRule]):e;D(a),o&&(null==j||j(o,Boolean(e))),null==I||I(null!=o?o:M,a)}),[o,M,S,j,I]),W=(0,n.useCallback)((e=>{if("function"==typeof f&&Promise.resolve(f(e)).then(H),e===i&&m){const e=new s.Xq("The value is required",{validationRule:"required"});return H(e),e}if(U){if(void 0===e&&void 0===i)return void H(void 0);U(e);const o=(0,r.K$)(U.errors);return H(o),o}H(void 0)}),[U,i,m,H,f]);(0,n.useEffect)((()=>{!V&&o&&null!=P&&P[o]&&H(P[o])}),[o,P,V,H]),(0,n.useEffect)((()=>{Z.showAllErrors&&(z(!0),null==A||A(null!=o?o:M,!0))}),[M,o,Z.showAllErrors,A]);const J=(0,n.useCallback)(((e,a)=>{if(e)null==v||v(null!=a?a:$);else{if(null==p||p(null!=a?a:$),!K.current&&!y)return;"function"==typeof g&&Promise.resolve(g(null!=a?a:$)).then(H),z(!0),null==A||A(null!=o?o:M,!0)}}),[M,o,$,y,v,p,g,H,A]),Y=(0,n.useCallback)((()=>J(!0)),[J]),X=(0,n.useCallback)((()=>J(!1)),[J]),Q=(0,n.useCallback)((e=>{const n=N(e);if(n!==$&&(q(n),K.current=!0,z(!1),null==A||A(null!=o?o:M,!1),W(n),null==b||b(n),o&&(null==w||w(o,n)),a)){null==T||T(`/${L}${a&&"/"!==a?a:""}`,n)}}),[M,o,a,L,$,b,W,w,A,T,N]),ee=(0,n.useMemo)((()=>null!=h?h:V),[h,V]);return(0,n.useEffect)((()=>(o&&(null==Z||Z.handleMountField(o)),W(G),()=>{o&&(null==Z||Z.handleUnMountField(o))})),[]),{...e,id:M,value:_($),error:F?void 0:O?ee:void 0,setHasFocus:J,handleFocus:Y,handleBlur:X,handleChange:Q}}}}]);
//# sourceMappingURL=e9e4f3d162223e32c58ffdf8c5daecd064a16d65-c8d557dc3f4d608f2540.js.map