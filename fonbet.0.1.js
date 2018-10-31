
range = prompt("Укажите пороговое значение:");
a=$(".table").children;
for (i = 0; i < a.length; i++) {
    for (ii = 1; ii < a[i].children.length; ii++){
        for (iii = 2; iii < a[i].children[ii].children.length; iii++) {
           if(parseInt(range)<parseInt(a[i].children[ii].children[iii].innerText.split(".")[0])){
					a[i].children[ii].children[iii].outerHTML=a[i].children[ii].children[iii].outerHTML.replace('<td', '<td style="background: #f0f000"');
					
		}
            }
        
}}
