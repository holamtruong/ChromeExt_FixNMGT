// code  ---
var parentElements = document.querySelectorAll(`[tabindex="-1"][class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable"]`);
//
var childElements = [];
//
parentElements.forEach(parentElement => {
  var inputs = parentElement.querySelectorAll('input[type="text"]');
  inputs.forEach(input => childElements.push(input));
});
// 
var char_count = 0;
childElements.forEach(childElements => {
  if (childElements.name === 'maKhachHang' && childElements.value.indexOf('NMGT') !==-1 ) {
    childElements.value = childElements.value.replace("NMGT", "GT");
	char_count++;
  } 
  if (childElements.name === 'soHopDong' && childElements.value.indexOf('NMGT') !==-1) {
    childElements.value = childElements.value.replace("NMGT", "GT");
	char_count++;
  }
  if (childElements.name === 'maDongHo' && childElements.value.indexOf('NMGT') !==-1) {
    childElements.value = childElements.value.replace("NMGT", "GT");
	char_count++;
  }
  if (childElements.name === 'maVach' && childElements.value.indexOf('NMGT') !==-1) {
    childElements.value = childElements.value.replace("NMGT", "GT");
	char_count++;
  }
  
});
// rs
if(char_count > 0){
	 alert('Thay thế ' + char_count + ' từ NMGT thành GT.');
	 char_count = 0;
 }else
 {
	alert('Không tìm thấy từ NMGT.');
 }


